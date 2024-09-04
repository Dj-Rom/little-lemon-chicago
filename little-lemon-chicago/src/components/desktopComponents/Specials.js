import React from 'react';
import styles from '../../styles/components_styles/specials.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../otherComponents/Card';
import { useNavigate } from 'react-router-dom';
import SliderMobile from '../otherComponents/Slider';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const Specials = ({ data, handleClickOrderOnlineCard }) => {
  const navigate = useNavigate();
  const pageSel = useSelector(pageSelector);

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <section className={styles.specials}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            <div className={styles.group_title_and_btn}>
              <h1>This Week's Specials!</h1>
              <button className={styles.menu_button} onClick={handleClick} aria-label="View online menu">
                Online Menu
              </button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} md={10} sm={10} xs={10} xl={10}>
            {pageSel.lastWidth > 705 ? (
              <ul className={styles.list_cards}>
                {data.map((card) => (
                  <li key={card.id} className={styles.cards}>
                    <Card onClick={handleClickOrderOnlineCard} card={card} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={styles.slider_list_cards}>
                <SliderMobile
                  amountCards={2}
                  list={data.map((card) => (
                    <li key={card.id} className={styles.special_slider_card}>
                      <Card card={card} />
                    </li>
                  ))}
                />
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Specials;
