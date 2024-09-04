import { useCallback, useEffect } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import logo from './../../assets/icons/logo_footer.webp'
import styles from '../../styles/components_styles/footer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  pageSelector,
  renderSelector,
  setError,
} from '../../features/slices/pageViewSlice'
import { Col, Container, Row } from 'react-bootstrap'
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const render = useSelector(renderSelector)
  const pageSel = useSelector(pageSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = useCallback(
    (to) => {
      navigate(to)
    },
    [navigate]
  )

  const handleKeyDown = useCallback(
    (e, to) => {
      if (e.key === 'Enter') handleClick(to)
    },
    [handleClick]
  )

  const navItems = [
    { label: 'Home', path: 'lettle_lemon/' },
    { label: 'About', path: 'lettle_lemon/about' },
    { label: 'Menu', path: 'lettle_lemon/menu' },
    { label: 'Reservation', path: 'lettle_lemon/booking' },
    { label: 'Order online', path: 'lettle_lemon/order_online' },
    { label: 'Login', path: 'lettle_lemon/login' },
  ]

  useEffect(() => {
    const mainHeader = document.querySelector('#main_header')
    const mainMain = document.querySelector('#main_main')
    const mainFooter = document.querySelector('#main_footer')

    if (mainHeader && mainMain && mainFooter) {
      const totalHeightMain = Array.from(mainMain.children).reduce(
        (total, child) => total + child.offsetHeight,
        0
      )

      const newFooterTop =
        mainHeader.offsetHeight + totalHeightMain < window.innerHeight
          ? window.innerHeight - mainFooter.offsetHeight * 2 + 29
          : mainHeader.offsetHeight + totalHeightMain

      mainFooter.style.top = `${newFooterTop}px`
    } else {
      dispatch(
        setError(
          'One or more elements are missing for creating Footer from Main'
        )
      )
    }
  }, [render, pageSel.lastWidth, dispatch])

  return (
    <footer id="main_footer" className={styles.footer_page}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={2} lg={2} sm={2} xs={3}>
            <img
              src={logo}
              className={styles.footer_page_logo}
              alt="Little Lemon Logo"
            />
          </Col>
          <Col md={2} lg={2} sm={3} xs={4}>
            <section className={styles.footer_nav}>
              <h3>Site Map</h3>
              <ul role="navigation" aria-label="Footer site map">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className={styles.nav_menu_btn}
                    onClick={() => handleClick(item.path)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, item.path)}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </section>
          </Col>
          <Col md={3} lg={3} sm={4} xs={4}>
            <section className={styles.footer_contact}>
              <ul
                className={styles.footer_contact_ul}
                aria-label="Contact Information"
              >
                <h3>Contact</h3>
                <li>
                  <span>Address: 123 Citrus Lane Chicago, IL 60614</span>
                </li>
                <li>
                  <a href="mailto:info@littlelemon.com" aria-label="Email us">
                    Email: info@littlelemon.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1(312) 555-6789" aria-label="Call us">
                    Tel: (312) 555-6789
                  </a>
                </li>
              </ul>
            </section>
          </Col>
          <Col md={1} lg={1} sm={3} xs={6}>
            <section className={styles.footer_social}>
              <ul
                className={styles.footer_social_ul}
              >
                <h3>Social</h3>
                <li>
                  <a href="https://www.youtube.com/" aria-label="YouTube">
                    <TiSocialYoutube
                      style={{ height: '2rem', width: '2rem' }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" aria-label="Facebook">
                    <TiSocialFacebook
                      style={{ height: '2rem', width: '2rem' }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" aria-label="Instagram">
                    <TiSocialInstagram
                      style={{ height: '2rem', width: '2rem' }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" aria-label="Twitter">
                    <BsTwitterX style={{ height: '1.5rem', width: '2rem' }} />
                  </a>
                </li>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
