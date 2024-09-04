import React from 'react'
import styles from '../../styles/components_styles/about.module.scss'
import Chicago from './../desktopComponents/Chicago'
const AboutPage = () => {
  document.title = 'Restaurant About Us'
  return (
    <section className={styles.about_page}>
      <Chicago />
    </section>
  )
}

export default AboutPage
