import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import menuData from '../../data/menuData';
import { v4 as uuidv4 } from 'uuid';
import { Tab, TabList, TabPanel, Tabs } from '../otherComponents/Tabs';
import Card from '../otherComponents/Card';
import styles from '../../styles/components_styles/menu.module.scss';

const MenuPage = () => {
  document.title = 'Restaurant Menu';
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop();
  const data = menuData[currentTab] || menuData['appetizers'];

  return (
    <section className={styles.menu_page} aria-labelledby="menu-heading">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <h1 id="menu-heading">Our Menu</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <Tabs>
              <TabList className={styles.menu_page_nav} role="tablist" aria-label="Menu categories">
                <Tab to="/menu/appetizers" role="tab" aria-selected={currentTab === 'appetizers'}>
                  Appetizers
                </Tab>
                <Tab to="/menu/starters" role="tab" aria-selected={currentTab === 'starters'}>
                  Starters
                </Tab>
                <Tab to="/menu/main_dishes" role="tab" aria-selected={currentTab === 'main_dishes'}>
                  Main Dishes
                </Tab>
                <Tab to="/menu/desserts" role="tab" aria-selected={currentTab === 'desserts'}>
                  Desserts
                </Tab>
                <Tab to="/menu/drinks" role="tab" aria-selected={currentTab === 'drinks'}>
                  Drinks
                </Tab>
              </TabList>
              <TabPanel role="tabpanel" aria-labelledby={`${currentTab}-tab`}>
                {data.length > 0 ? (
                  <ul id={styles.menu_cards} aria-label={`${currentTab} items`}>
                    {data.map((item) => (
                      <li tabIndex={0} key={uuidv4()}>
                        <Card card={item} orderBtn={false} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No items available in this category.</p>
                )}
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuPage;
