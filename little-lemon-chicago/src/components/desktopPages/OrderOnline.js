import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from '../otherComponents/Card';
import styles from '../../styles/components_styles/menu.module.scss';
import data_menu from '../../data/menuData';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './../../features/slices/pageOrderOnlineSlice';
import { setError } from '../../features/slices/errorSlice';
import { Tab, TabList, TabPanel, Tabs } from '../otherComponents/Tabs';
import { Col, Container, Row } from 'react-bootstrap';

const OrderOnline = () => {
  document.title = 'Restaurant Order Online';

  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = location.pathname.split('/').pop();

  const handleClickOrderOnlineCard = (e) => {
    e.preventDefault();

    const role = e.currentTarget.getAttribute('type');
    const itemId = e.currentTarget.getAttribute('data-tabid') || e.currentTarget.id;

    if (itemId) {
      let item = null;
      for (const category in data_menu) {
        item = data_menu[category].find((item) => item.id === itemId);
        if (item) break;
      }

      if (item) {
        if (role === 'ADDED' || role === 'tabSelect') {
          dispatch(ADD_PRODUCT(item));
        } else if (role === 'REMOVE') {
          dispatch(REMOVE_PRODUCT(item));
        }
      } else {
        dispatch(setError('Item not found'));
      }
    }
  };

  const data = data_menu[currentTab] || data_menu['appetizers'];

  return (
    <section className={styles.menu_page} aria-labelledby="menu-heading">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <h1 id="menu-heading">Order online</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <Tabs>
              <TabList className={styles.menu_page_nav} role="tablist" aria-label="Menu categories">
                <Tab to="/order_online/appetizers" role="tab" aria-selected={currentTab === 'appetizers'}>
                  Appetizers
                </Tab>
                <Tab to="/order_online/starters" role="tab" aria-selected={currentTab === 'starters'}>
                  Starters
                </Tab>
                <Tab to="/order_online/main_dishes" role="tab" aria-selected={currentTab === 'main_dishes'}>
                  Main Dishes
                </Tab>
                <Tab to="/order_online/desserts" role="tab" aria-selected={currentTab === 'desserts'}>
                  Desserts
                </Tab>
                <Tab to="/order_online/drinks" role="tab" aria-selected={currentTab === 'drinks'}>
                  Drinks
                </Tab>
              </TabList>
              <TabPanel role="tabpanel" aria-labelledby={`${currentTab}-tab`}>
                <ul id={styles.menu_cards} aria-label={`${currentTab} items`}>
                  {data.map((item) => (
                    <li
                      type="tabSelect"
                      data-tabid={item.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`Order ${item.name}`}
                      onKeyDown={(e) => e.key === 'Enter' && handleClickOrderOnlineCard(e)}
                      key={item.id}
                    >
                      <Card card={item} onClick={handleClickOrderOnlineCard} />
                    </li>
                  ))}
                </ul>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderOnline;
