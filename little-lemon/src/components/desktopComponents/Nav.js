import React from 'react'
import { IoBasketOutline } from 'react-icons/io5'
import styles from '../../styles/components_styles/header.module.scss'
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  pageSelector,
  setMobileMenuOpen,
} from '../../features/slices/pageViewSlice'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import { ImInfo } from 'react-icons/im'
import { LuHome } from 'react-icons/lu'
import { VscBook } from 'react-icons/vsc'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
import { ReactComponent as ReservationSvg } from '../../assets/mobile/navIcon/reservation_mobile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderOnlineSelector } from '../../features/slices/pageOrderOnlineSlice'

const Nav = ({ logo }) => {
  const navigate = useNavigate()
  const orderSel = useSelector(orderOnlineSelector)
  const pageSel = useSelector(pageSelector)
  const dispatch = useDispatch()

  const handleClick = (to) => {
    navigate(to)
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <nav role="navigation" aria-label="Main Navigation">
          <ul role="menubar">
            {pageSel.lastWidth < 1200 ? (
              <>
                <Col lg={1} md={1} sm={1} xs={1} xl={1}>
                  <li className={styles.nav_menu_btn} role="none">
                    <PopupState
                      variant="popover"
                      popupId="menuPopover"
                      style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        maxHeight: '100vh',
                      }}
                    >
                      {(popupState) => (
                        <>
                          <Button
                            {...bindTrigger(popupState)}
                            aria-haspopup="true"
                            aria-expanded={popupState.isOpen}
                            aria-label="Open Menu"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="25"
                              viewBox="0 0 35 25"
                              fill="none"
                              role="img"
                              aria-labelledby="menuIconTitle"
                            >
                              <title id="menuIconTitle">Menu Icon</title>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z"
                                fill="black"
                              />
                            </svg>
                          </Button>
                          <Menu
                            {...bindMenu(popupState)}
                            PaperProps={{
                              sx: {
                                width: '80vw',
                                height: 'calc(100vh - 16px)',
                                boxShadow: '17px 0px 263px 76px black',
                                overflowY: 'auto',
                                maxHeight: 'calc(100vh - 22px) !important',
                                minHeight: 'calc(100vh - 16px) !important',
                                left: '0 !important',
                                top: '0 !important',
                                position: 'fixed',
                                alignContent: 'flex-start',
                                marginTop: '0',
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                              },
                            }}
                            role="menu"
                            aria-label="Navigation Menu"
                          >
                            <MenuItem
                              style={{
                                left: '-25vw',
                                padding: '9px',
                                marginTop: ' -41vh',
                                maxHeight: '15vh',
                              }}
                              onClick={() => {
                                handleClick(' /')
                                popupState.close()
                                dispatch(setMobileMenuOpen(popupState.isOpen))
                              }}
                              role="menuitem"
                            >
                              <Logo aria-label="Logo" />
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: '-26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <LuHome
                                aria-label="Home"
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: '1rem',
                                  marginTop: '-.6rem',
                                }}
                              />
                              Home
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: '-26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/about')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <ImInfo
                                aria-label="About"
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: '1rem',
                                  marginTop: '-.6rem',
                                }}
                              />
                              About
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: '-26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/menu')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <VscBook
                                aria-label="Menu"
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: '1rem',
                                  marginTop: '-.6rem',
                                }}
                              />
                              Menu
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: ' -26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/booking')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <ReservationSvg
                                aria-label="Reservation"
                                style={{
                                  height: '4rem',
                                  width: '4rem',
                                  marginLeft: '-1rem',
                                  marginRight: '0px',
                                }}
                              />
                              Reservation
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: '-26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/order_online')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <MdOutlineShoppingBag
                                aria-label="Order Online"
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: '1rem',
                                  marginTop: '-.6rem',
                                }}
                              />
                              Order online
                            </MenuItem>
                            <MenuItem
                              style={{
                                padding: '9px',
                                left: '-26vw',
                                maxHeight: '15vh',
                                margin: '14px',
                              }}
                              onClick={() => {
                                handleClick('/login')
                                popupState.close()
                              }}
                              role="menuitem"
                            >
                              <FiLogIn
                                aria-label="Login"
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: '1rem',
                                  marginTop: '-.6rem',
                                }}
                              />
                              Login
                            </MenuItem>
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  </li>
                </Col>
                {/* Mobile basket */}
                <Col lg={1} md={1} sm={1} xs={1} xl={1}>
                  <li
                    onClick={() => handleClick('/basket')}
                    role="button"
                    tabIndex={0}
                    aria-label="Basket"
                    onKeyDown={(e) =>
                      e.key === 'Enter' && handleClick('/basket')
                    }
                  >
                    {orderSel.orderAmount > 0 ? (
                      <div className={styles.nav_menu_btn_basket}>
                        <IoBasketOutline
                          style={{
                            height: '2rem',
                            width: '2rem',
                            marginTop: '-.6rem',
                          }}
                        />
                        <span aria-live="polite">${orderSel.orderAmount}</span>
                      </div>
                    ) : (
                      ''
                    )}
                  </li>
                </Col>
              </>
            ) : (
              <>
                {/* Desktop navigation */}
                <li
                  className={styles.nav_menu_btn_logo}
                  onClick={() => handleClick('/')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Logo"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/')}
                >
                  {logo}
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Home"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/')}
                >
                  Home
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/about')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="About"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/about')}
                >
                  About
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/menu')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Menu"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/menu')}
                >
                  Menu
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/booking')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Reservation"
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleClick('/booking')
                  }
                >
                  Reservation
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/order_online')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Order Online"
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleClick('/order_online')
                  }
                >
                  Order online
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/login')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Login"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/login')}
                >
                  Login
                </li>
                <li
                  className={styles.nav_menu_btn}
                  onClick={() => handleClick('/basket')}
                  role="menuitem"
                  tabIndex={0}
                  aria-label="Basket"
                  onKeyDown={(e) => e.key === 'Enter' && handleClick('/basket')}
                >
                  {orderSel.orderAmount > 0 ? (
                    <div className={styles.nav_menu_btn_basket}>
                      <IoBasketOutline
                        style={{
                          height: '2rem',
                          width: '2rem',
                          marginTop: '-.6rem',
                        }}
                      />
                      <span aria-live="polite">${orderSel.orderAmount}</span>
                    </div>
                  ) : (
                    ''
                  )}
                </li>
              </>
            )}
          </ul>
        </nav>
      </Row>
    </Container>
  )
}

export default Nav
