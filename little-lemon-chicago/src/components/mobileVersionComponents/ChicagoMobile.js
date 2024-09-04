import React from 'react'
import SliderMobile from '../otherComponents/Slider'
import styles from '../../styles/mobile/chicagoMobile.module.scss'

const ChicagoMobile = () => {
  const photos = [
    require('../../assets/icons/Mario and Adrian b 1.webp'),
    require('../../assets/icons/Mario and Adrian A 1.webp'),
    require('../../assets/icons/little_lemon_inside_2.webp'),
  ]

  const photosList = photos.map((src, index) => (
    <div key={index}>
      <img
        src={src}
        style={{
          width: '94%',
          marginTop: '7px',
          borderRadius: '1rem',
          marginLeft: '13px',
        }}
        alt="Mario and Adrian"
        className={styles.our_story_photos}
      />
    </div>
  ))

  return (
    <section className={styles.chicago_mobile_section}>
      <div className={styles.our_story_contant}>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>

        <span>
          Little Lemon began with a simple yet passionate idea: to bring a slice
          of warmth and a dash of zest to the heart of Chicago. What started as
          a dream in a small kitchen quickly grew into a beloved spot for locals
          and visitors alike.
        </span>
        <span>
          Our journey began when a group of friends, united by their love for
          fresh ingredients and vibrant flavors, decided to turn their culinary
          dreams into reality. They envisioned a place where every meal would be
          a celebration of flavor, community, and joy.
        </span>
      </div>

      <SliderMobile
        className={styles.slider_chicago}
        amoundCards={2.2}
        list={photosList}
      />
    </section>
  )
}

export default ChicagoMobile
