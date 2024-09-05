import React, { useCallback } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ImInfo } from 'react-icons/im';
import { LuHome } from 'react-icons/lu';
import { VscBook } from 'react-icons/vsc';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { ReactComponent as ReservationSvg } from '../../assets/mobile/navIcon/reservation_mobile.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderOnlineSelector } from '../../features/slices/pageOrderOnlineSlice';
import styles from '../../styles/mobile/headerMobile.module.scss';
import { IoBasketOutline } from 'react-icons/io5';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const HeaderMobile = () => {
  const navigate = useNavigate();
  const orderSel = useSelector(orderOnlineSelector);

  const handleClick = useCallback(
    (to) => {
      navigate(to);
    },
    [navigate],
  );

  return (
    <header id="main_header" className={styles.mobile_header}>
      <nav className={styles.main_header_mobile_nav} role="navigation" aria-label="Main Navigation">
        <ul className={styles.main_header_mobile_nav_ul} role="menubar">
          {/* Menu Button */}
          <li className={styles.main_header_mobile_nav_ul_btn_menu} role="none">
            <PopupState variant="popover" popupId="menuPopover">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)} aria-haspopup="true" aria-expanded={popupState.isOpen}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="25"
                      viewBox="0 0 35 25"
                      fill="none"
                      aria-labelledby="menuIconTitle"
                    >
                      <title id="menuIconTitle">Open Menu</title>
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
                    aria-label="Navigation Menu"
                    role="menu"
                    PaperProps={{
                      sx: {
                        width: '80vw',
                        height: 'calc(100vh - 16px)',
                        boxShadow: '17px 0px 263px 76px black',
                        overflowY: 'auto',
                        maxHeight: 'calc(100vh - 22px)',
                        minHeight: 'calc(100vh - 16px)',
                        left: '0',
                        top: '0',
                        position: 'fixed',
                      },
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClick('/');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <Logo aria-label="Logo" />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <LuHome aria-label="Home" style={{ width: '47px', height: '25px' }} />
                      Home
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/about');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <ImInfo aria-label="About" style={{ width: '47px', height: '25px' }} />
                      About
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/menu');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <VscBook aria-label="Menu" style={{ width: '47px', height: '25px' }} />
                      Menu
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/booking');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <ReservationSvg aria-label="Reservation" />
                      Reservation
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/order_online');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <MdOutlineShoppingBag aria-label="Order Online" style={{ width: '47px', height: '25px' }} />
                      Order online
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClick('/login');
                        popupState.close();
                      }}
                      role="menuitem"
                    >
                      <FiLogIn aria-label="Login" style={{ width: '47px', height: '25px' }} />
                      Login
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </li>

          {/* Logo Button */}
          <li className={styles.main_header_mobile_nav_ul_btn_logo} role="menuitem">
            <button onClick={() => handleClick('/')} aria-label="Home" style={{ border: 'none', background: 'none' }}>
              <Logo />
            </button>
          </li>

          {/* Basket Button */}
          <li className={styles.main_header_mobile_nav_ul_btn_basket} role="menuitem">
            <button
              onClick={() => handleClick('/basket')}
              aria-label="Basket"
              style={{ border: 'none', background: 'none' }}
            >
              <div className={styles.nav_menu_btn_basket}>
                <IoBasketOutline style={{ height: '2rem', width: '2rem', marginTop: '-.6rem' }} role={'basket'} />
                {orderSel.orderAmounProduct !== 0 && (
                  <span className={styles.nav_menu_btn_basket_amount} style={{ color: 'black' }}>
                    {orderSel.orderAmounProduct}
                  </span>
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
