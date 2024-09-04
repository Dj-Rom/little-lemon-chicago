import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import menuData from '../../data/menuData'
import { v4 as uuidv4 } from 'uuid'
import { Tabs, TabList, Tab, TabPanel } from '../otherComponents/Tabs'
import Card from '../otherComponents/Card'
import styles_mobile from '../../styles/mobile/menu_mobile_and_order_online.module.scss'

const MenuMobile = () => {
  document.title = 'Restaurant MENU'
  const location = useLocation()
  const currentTab = location.pathname.split('/').pop()
  const data = menuData[currentTab] || menuData['appetizers']
  return (
    <section className={styles_mobile.menu_page_mobile}>
      <Container>
        <Row className="justify-content-md-center">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            xl={12}
            className={styles_mobile.menu_page_nav_mobile_title}
          >
            <h1>Menu</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            xl={12}
            className={styles_mobile.menu_page_nav_mobile_tabs}
          >
            <Tabs>
              <TabList className={styles_mobile.menu_page_nav_mobile}>
                <Tab to="/menu/">Appetizers</Tab>
                <Tab to="/menu/starters">Starters</Tab>
                <Tab to="/menu/main_dishes">Main Dishes</Tab>
                <Tab to="/menu/desserts">Desserts</Tab>
                <Tab to="/menu/drinks">Drinks</Tab>
              </TabList>
              <TabPanel key={uuidv4()}>
                <ul className={styles_mobile.menu_page_nav_mobile_tabs_ul}>
                  {data.length > 0 ? (
                    data.map((item) => (
                      <li
                        className={styles_mobile.menu_page_slider_card}
                        key={uuidv4()}
                      >
                        <Card key={item.id} card={item} orderBtn={false} />
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
  )
}

export default MenuMobile
