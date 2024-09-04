import React from 'react';
import styles from '../../styles/components_styles/about.module.scss';

import ChicagoMobile from './ChicagoMobile';

const AboutMobile = () => {
  document.title = 'Restaurant About Us';
  return (
    <section className={styles.about_page}>
      <ChicagoMobile />
    </section>
  );
};

export default AboutMobile;
