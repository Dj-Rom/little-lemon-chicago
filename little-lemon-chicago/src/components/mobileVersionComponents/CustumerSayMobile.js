import React from 'react';
import SliderMobile from './../otherComponents/Slider';
import { Col, Container, Row } from 'react-bootstrap';
import { ImQuotesLeft } from 'react-icons/im';
import ratings from '../../data/ratingDate';
import styles from '../../styles/mobile/custumerSayMobile.module.scss';
import RatingReview from '../desktopComponents/RatingReview';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const CustumerSayMobile = () => {
  const pageSel = useSelector(pageSelector);
  const ratingsList = ratings.map((e, index) => (
    <li>
      <div className={styles.customers}>
        <div className={styles.photoNameStars}>
          <img src={e.img} alt={e.name} loading={'eager'} />
          <h2>{e.name}</h2>
          <br />
          <RatingReview className={styles.ratingReview} rating={e.title} />
        </div>
        <div className={styles.review_text}>
          <p>
            <ImQuotesLeft /> {e.reviewText}
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <section className={styles.section_customer_say_mobile}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12} xs={12} className={styles.section_customer_say_mobile_title}>
            <h1>Our Guests' Feedback:</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div className={styles.card_say}></div>
          <Col xs="12" className={styles.section_customer_say_mobile_slider}>
            <SliderMobile
              amoundCards={pageSel.lastWidth < 400 ? 1.1 : pageSel.lastWidth < 600 ? 1.4 : 2.2}
              list={ratingsList}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustumerSayMobile;
