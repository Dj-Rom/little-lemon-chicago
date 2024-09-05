import { ImQuotesLeft } from 'react-icons/im';
import ratings from '../../data/ratingDate';
import styles from '../../styles/components_styles/customers_say.module.scss';
import RatingReview from '../desktopComponents/RatingReview';
import { Col, Container, Row } from 'react-bootstrap';
import SliderMobile from './../otherComponents/Slider';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const CustomersSay = () => {
  const pageSel = useSelector(pageSelector);

  const renderRatingItem = (e) => (
    <li className={styles.rating_li} key={e.id || e.name}>
      <Col>
        <img src={e.img} alt={e.name} loading="lazy" style={{ width: '30', height: 'auto' }} />
        <h2>{e.name}</h2>
        <RatingReview className={styles.stars_rating} rating={e.title} />
        <p>
          <ImQuotesLeft /> {e.reviewText}
        </p>
      </Col>
    </li>
  );

  const ratingsList =
    pageSel.lastWidth < 1200
      ? pageSel.lastWidth > 1125
        ? ratings.slice(0, 3).map(renderRatingItem)
        : ratings.map(renderRatingItem)
      : ratings.map(renderRatingItem);

  return (
    <section className={styles.customer_say}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <h1 id="feedback-heading">Our Guests' Feedback:</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            {pageSel.lastWidth > 1125 ? (
              <ul role="region" aria-labelledby="feedback-heading" className={styles.customer_say_ul}>
                {ratingsList}
              </ul>
            ) : (
              <SliderMobile className={styles.customer_say_ul_slider} amoundCards={2} list={ratingsList} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomersSay;
