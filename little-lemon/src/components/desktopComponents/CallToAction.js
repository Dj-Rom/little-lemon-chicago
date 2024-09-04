import React from 'react'
import styles from '../../styles/components_styles/call_to_action.module.scss'
import restaurantFoodImg from '../../assets/icons/restauranfood 1.webp'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const CallToAction = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/booking')
  }

  return (
    <article
      className={styles.article_call_to_action}
      role="region"
      aria-label="Call to Action"
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={4} md={10} sm={10} xs={5} xl={4}>
            <section className={styles.section_call_to_action}>
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button
                className={styles.reserve_a_table}
                onClick={handleClick}
                aria-label="Reserve a Table"
              >
                Reserve a Table
              </button>
            </section>
          </Col>
          <Col
            className={styles.rest_food_figure}
            lg={2}
            md={0}
            sm={0}
            xl={2}
          ></Col>
          <Col
            className={styles.rest_food_figure}
            lg={4}
            md={10}
            sm={10}
            xl={4}
          >
            <img
              className={styles.rest_food_img}
              src={restaurantFoodImg}
              alt="Restaurant food"
              fetchpriority="high"
            />
          </Col>
        </Row>
      </Container>
    </article>
  )
}

export default CallToAction
