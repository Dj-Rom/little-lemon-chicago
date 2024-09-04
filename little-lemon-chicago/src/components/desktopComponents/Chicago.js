import styles from '../../styles/components_styles/chicago.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Chicago = () => {
  return (
    <section className={styles.our_story} id="our_story">
      <Container>
        <div className={styles.our_story_contant}>
          <Row className="justify-content-md-center">
            <Col lg={10} md={12} sm={12} xs={12} xl={5}>
              <article role="region" aria-labelledby="our-story-heading">
                <h1 id="our-story-heading">Our Story</h1>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>
                  Little Lemon began with a simple yet passionate idea: to bring a slice of warmth and a dash of zest to
                  the heart of Chicago. What started as a dream in a small kitchen quickly grew into a beloved spot for
                  locals and visitors alike.
                </p>
                <p>
                  Our journey began when a group of friends, united by their love for fresh ingredients and vibrant
                  flavors, decided to turn their culinary dreams into reality. They envisioned a place where every meal
                  would be a celebration of flavor, community, and joy.
                </p>
              </article>
            </Col>
            <Col lg={5} md={0} sm={0} xl={5}>
              <figure className={styles.our_story_photos} aria-label="Photos of Mario and Adrian">
                <img
                  src={require('../../assets/icons/Mario and Adrian A 1.webp')}
                  alt="Mario and Adrian"
                  className={styles.our_story_photos_1}
                  loading="lazy"
                />
                <img
                  src={require('../../assets/icons/Mario and Adrian b 1.webp')}
                  alt="Mario and Adrian"
                  className={styles.our_story_photos_2}
                  loading="lazy"
                />
              </figure>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={10} md={12} sm={10} xl={10}>
              <article>
                <p>
                  In the bustling streets of Chicago, Little Lemon opened its doors with a menu inspired by the essence
                  of good food and great company. We took pride in using locally sourced ingredients, crafting dishes
                  that are as wholesome as they are delicious. From our tangy lemon-infused dishes to our warm,
                  welcoming atmosphere, every detail was designed to make you feel right at home.
                </p>
                <p>
                  As we continue to grow and evolve, our mission remains unchanged: to create memorable dining
                  experiences that bring a smile to your face and a burst of flavor to your palate. At Little Lemon,
                  every meal is a celebration of the vibrant spirit of Chicago and the joy of sharing good food with
                  good friends.
                </p>
                <p>
                  Welcome to Little Lemon. Here’s to great food, great company, and the little moments that make life
                  truly special.
                </p>
              </article>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Chicago;
