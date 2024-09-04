import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../otherComponents/Card'
import styles from '../../styles/components_styles/orderOnline.module.scss'
import styles_mobile from '../../styles/mobile/menu_mobile_and_order_online.module.scss'
import data_menu from '../../data/menuData'
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './../../features/slices/pageOrderOnlineSlice'
import { setError } from '../../features/slices/errorSlice'
import { Tab, TabList, TabPanel, Tabs } from '../otherComponents/Tabs'
import { Col, Container, Row } from 'react-bootstrap'
import SliderMobile from '../otherComponents/Slider'
import { pageSelector } from '../../features/slices/pageViewSlice'

const OrderOnline = () => {
  document.title = 'Restaurant Order Online'
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const pageSel = useSelector(pageSelector)
  const currentTab = location.pathname.split('/').pop()

  const handleClickOrderOnlineCard = (e) => {
    e.preventDefault()

    const role = e.currentTarget.getAttribute('type')
    const itemId =
      e.currentTarget.getAttribute('data-tabid') || e.currentTarget.id

    if (itemId) {
      let item = null
      for (const category in data_menu) {
        item = data_menu[category].find((item) => item.id === itemId)
        if (item) break
      }

      if (item) {
        if (role === 'ADDED' || role === 'tabSelect') {
          dispatch(ADD_PRODUCT(item))
        } else if (role === 'REMOVE') {
          dispatch(REMOVE_PRODUCT(item))
        }
      } else {
        dispatch(setError('Item not found'))
      }
    }
  }

  const data = data_menu[currentTab] || data_menu['appetizers']

  return pageSel.isMobile ? (
    <section
      className={styles_mobile.order_page_mobile}
      aria-labelledby="order-online-heading"
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <h1 id="order-online-heading">Order Online</h1>
            <div
              className={styles_mobile.order_header_basket_mobile}
              onClick={() => navigate(' /basket')}
              role="button"
              aria-label="Go to basket"
            ></div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <Tabs>
              <TabList
                className={styles_mobile.order_online_page_nav_mobile}
                role="tablist"
                aria-label="Order categories"
              >
                <Tab to="/order_online/appetizers" role="tab">
                  Appetizers
                </Tab>
                <Tab to="/order_online/starters" role="tab">
                  Starters
                </Tab>
                <Tab to="/order_online/main_dishes" role="tab">
                  Main Dishes
                </Tab>
                <Tab to="/order_online/desserts" role="tab">
                  Desserts
                </Tab>
                <Tab to="/order_online/drinks" role="tab">
                  Drinks
                </Tab>
              </TabList>
              <TabPanel role="tabpanel" aria-labelledby={`${currentTab}-tab`}>
                {data.length > 0 ? (
                  <SliderMobile
                    list={data.map((item) => (
                      <li
                        className={styles.order_online_slider_card}
                        key={item.id}
                        role="button"
                        aria-label={`Order ${item.name}`}
                        onClick={handleClickOrderOnlineCard}
                      >
                        <Card card={item} />
                      </li>
                    ))}
                  />
                ) : (
                  <p>No items available in this category.</p>
                )}
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    <section
      className={styles.order_page}
      aria-labelledby="order-online-heading"
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <h1 id="order-online-heading">Order Online</h1>
            <div
              className={styles.order_header_basket}
              onClick={() => navigate(' /basket')}
              role="button"
              aria-label="Go to basket"
            ></div>

            <Tabs>
              <TabList
                className={styles.order_online_page_nav}
                role="tablist"
                aria-label="Order categories"
              >
                <Tab to="/order_online/appetizers" role="tab">
                  Appetizers
                </Tab>
                <Tab to="/order_online/starters" role="tab">
                  Starters
                </Tab>
                <Tab to="/order_online/main_dishes" role="tab">
                  Main Dishes
                </Tab>
                <Tab to="/order_online/desserts" role="tab">
                  Desserts
                </Tab>
                <Tab to="/order_online/drinks" role="tab">
                  Drinks
                </Tab>
              </TabList>
              <TabPanel role="tabpanel" aria-labelledby={`${currentTab}-tab`}>
                {data.length > 0 ? (
                  <ul
                    id={styles.order_online_cards}
                    aria-label={`${currentTab} items`}
                  >
                    {data.map((item) => (
                      <li
                        type="tabSelect"
                        data-tabid={item.id}
                        tabIndex={0}
                        role="button"
                        aria-label={`Order ${item.name}`}
                        onKeyDown={(e) =>
                          e.key === 'Enter' && handleClickOrderOnlineCard(e)
                        }
                        key={item.id}
                      >
                        <Card
                          card={item}
                          onClick={handleClickOrderOnlineCard}
                        />
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
  )
}

export default OrderOnline
