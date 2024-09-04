import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../otherComponents/Card';
import styles_mobile from '../../styles/mobile/menu_mobile_and_order_online.module.scss';
import data_menu from '../../data/menuData';
import { Tab, TabList, TabPanel, Tabs } from '../otherComponents/Tabs';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const OrderOnlineMobile = ({ handleClickOrderOnlineCard }) => {
  document.title = 'Restaurant Order Online';
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop();
  const data = data_menu[currentTab] || data_menu['appetizers'];
  return (
    <section className={styles_mobile.order_online_mobile}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} sm={12} xs={12} xl={12} className={styles_mobile.menu_page_nav_mobile_title}>
            <h1>Order</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} sm={12} xs={12} xl={12} className={styles_mobile.menu_page_nav_mobile_tabs}>
            <Tabs>
              <TabList className={styles_mobile.menu_page_nav_mobile}>
                <Tab style={{ a: { color: 'orange' } }} to="/order_online/">
                  Appetizers
                </Tab>
                <Tab to="/order_online/starters">Starters</Tab>
                <Tab to="/order_online/main_dishes">Main Dishes</Tab>
                <Tab to="/order_online/desserts">Desserts</Tab>
                <Tab to="/order_online/drinks">Drinks</Tab>
              </TabList>
              <TabPanel key={uuidv4()}>
                <ul className={styles_mobile.menu_page_nav_mobile_tabs_ul}>
                  {data.length > 0 ? (
                    data.map((item) => (
                      <li className={styles_mobile.menu_page_slider_card} key={uuidv4()}>
                        <Card key={item.id} card={item} orderBtn={true} onClick={handleClickOrderOnlineCard} />
                      </li>
                    ))
                  ) : (
                    <p>No items available in this category.</p>
                  )}
                </ul>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderOnlineMobile;
