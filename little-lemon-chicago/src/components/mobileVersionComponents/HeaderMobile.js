import React, { useCallback } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ImInfo } from 'react-icons/im';
import { LuHome } from 'react-icons/lu';
import { VscBook } from 'react-icons/vsc';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { ReactComponent as ReservationSvg } from '../../assets/mobile/navIcon/reservation_mobile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderOnlineSelector } from '../../features/slices/pageOrderOnlineSlice';
import styles from '../../styles/mobile/headerMobile.module.scss';
import { IoBasketOutline } from 'react-icons/io5';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setMobileMenuOpen } from '../../features/slices/pageViewSlice';

const HeaderMobile = () => {
  const navigate = useNavigate();
  const orderSel = useSelector(orderOnlineSelector);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (to) => {
      navigate(to);
    },
    [navigate],
  );
  return (
    <header id="main_header" className={styles.mobile_header}>
      <nav className={styles.main_header_mobile_nav}>
        <ul className={styles.main_header_mobile_nav_ul}>
          <li className={styles.main_header_mobile_nav_ul_btn_menu}>
            <PopupState
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                alignItems: 'flex-start',
                maxHeight: '100vh !important',
                height: '100vh !important',
              }}
              variant="popover"
              popupId="demoPopover"
            >
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 35 25" fill="none">
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
                        overflowY: 'auto',
                        maxHeight: 'calc(100vh - 22px) !important',
                        minHeight: 'calc(100vh - 16px) !important',
                        boxShadow: '17px 0px 263px 76px black',
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
                  >
                    <MenuItem
                      style={{
                        left: '-26%',
                        padding: '9px',
                        marginTop: ' -45vh',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/');
                        popupState.close();
                        dispatch(setMobileMenuOpen(popupState.isOpen));
                      }}
                    >
                      <Logo />
                    </MenuItem>
                    <MenuItem
                      style={{
                        padding: '9px',
                        left: '-25%',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/');
                        popupState.close();
                      }}
                    >
                      <LuHome
                        style={{
                          width: '47px',
                          height: '25px',
                          maxHeight: '15vh',
                        }}
                      />
                      Home
                    </MenuItem>
                    <MenuItem
                      style={{
                        padding: '9px',
                        left: '-25%',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/about');
                        popupState.close();
                      }}
                    >
                      <ImInfo
                        style={{
                          width: '47px',
                          height: '25px',
                          maxHeight: '15vh',
                        }}
                      />
                      About
                    </MenuItem>
                    <MenuItem
                      style={{ padding: '9px', left: '-25%' }}
                      onClick={() => {
                        handleClick('/menu');
                        popupState.close();
                      }}
                    >
                      <VscBook
                        style={{
                          width: '47px',
                          height: '25px',
                          maxHeight: '15vh',
                        }}
                      />
                      Menu
                    </MenuItem>
                    <MenuItem
                      style={{
                        padding: '9px',
                        left: '-25%',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/booking');
                        popupState.close();
                      }}
                    >
                      <ReservationSvg /> Reservation
                    </MenuItem>
                    <MenuItem
                      style={{
                        padding: '9px',
                        left: '-25%',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/order_online');
                        popupState.close();
                      }}
                    >
                      <MdOutlineShoppingBag
                        style={{
                          width: '47px',
                          height: '25px',
                          maxHeight: '15vh',
                        }}
                      />
                      Order online
                    </MenuItem>
                    <MenuItem
                      style={{
                        padding: '9px',
                        left: '-25%',
                        maxHeight: '15vh',
                      }}
                      onClick={() => {
                        handleClick('/login');
                        popupState.close();
                      }}
                    >
                      <FiLogIn
                        style={{
                          width: '47px',
                          height: '25px',
                          maxHeight: '15vh',
                        }}
                      />{' '}
                      Login
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </li>
          <li
            className={styles.main_header_mobile_nav_ul_btn_logo}
            onClick={() => handleClick('/')}
            role="button"
            tabIndex={0}
            style={{ left: '0%' }}
            onKeyDown={(e) => e.key === 'Enter' && handleClick('/')}
          >
            <Logo />
          </li>
          <li
            className={styles.main_header_mobile_nav_ul_btn_basket}
            onClick={() => handleClick('/basket')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick('/basket')}
          >
            <div className={styles.nav_menu_btn_basket}>
              <IoBasketOutline
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginTop: '-.6rem',
                }}
              />
              <span className={styles.nav_menu_btn_basket_amound}>{orderSel.orderAmounProduct}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
