import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ToTop } from '../../assets/mobile/navIcon/toTop.svg';
import styles from '../../styles/mobile/footerMobile.module.scss';

const FooterMobile = () => {
  const navBarRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    if (navBarRef.current) {
      if (scrollPosition === 0 || scrollPosition < window.pageYOffset) {
        navBarRef.current.style.display = 'none';
      } else {
        navBarRef.current.style.display = 'block';
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <section className={styles.mobile_footer} id="mobile_main_footer">
      <button
        ref={navBarRef}
        className={styles.btn_to_top}
        onClick={() => document.getElementById('main_main').scrollIntoView({ block: "start", behavior: "smooth" })}
      >
        <ToTop />
      </button>
    </section>
  );
};

export default FooterMobile;
