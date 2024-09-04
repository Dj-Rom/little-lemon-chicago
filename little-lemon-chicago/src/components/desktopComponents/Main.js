import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './../../styles/components_styles/main.module.scss';
import './../../styles/addedToBasket.scss';
import HomePage from './../desktopPages/HomePage';
import BookingPage from './../desktopPages/BookingPage';
import LoginPage from './../desktopPages/LoginPage';
import MenuPage from './../desktopPages/MenuPage';
import { useDispatch, useSelector } from 'react-redux';
import { pageSelector, setLastWidth, setMobile, toggleRender } from '../../features/slices/pageViewSlice';
import OrderOnline from './../desktopPages/OrderOnline';
import BasketPage from './../desktopPages/BasketPage';
import AboutPage from './../desktopPages/AboutPage';
import ErrorPage from './../desktopPages/ErrorPage';
import MenuMobile from './../mobileVersionComponents/MenuMobile';
import OrderOnlineMobile from './../mobileVersionComponents/OrderOnlineMobile';
import AboutMobile from './../mobileVersionComponents/AboutMobile';

const Main = ({ handleClickOrderOnlineCard, refAddedToBasket }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pageSel = useSelector(pageSelector);

  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    const handleResizeOrLocationChange = () => {
      const currentWidth = window.innerWidth;
      const widthDifference = Math.abs(currentWidth - pageSel.lastWidth);

      if (pageSel.isMobile !== isMobile) {
        dispatch(setMobile(isMobile));
      }

      if (widthDifference >= 5 || location.pathname) {
        dispatch(toggleRender());
      }

      if (pageSel.lastWidth !== currentWidth) {
        dispatch(setLastWidth(currentWidth));
      }
    };

    handleResizeOrLocationChange(); // Initial call to handle current size and location

    window.addEventListener('resize', handleResizeOrLocationChange);
    return () => window.removeEventListener('resize', handleResizeOrLocationChange);
  }, [location.pathname, dispatch, isMobile, pageSel.isMobile, pageSel.lastWidth]);

  return (
    <main id="main_main" className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage handleClickOrderOnlineCard={handleClickOrderOnlineCard} />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu/*" element={pageSel.isMobile ? <MenuMobile /> : <MenuPage />} />
        <Route path="/about" element={pageSel.isMobile ? <AboutMobile /> : <AboutPage />} />
        <Route
          path="/order_online/*"
          element={
            pageSel.isMobile ? (
              <OrderOnlineMobile handleClickOrderOnlineCard={handleClickOrderOnlineCard} />
            ) : (
              <OrderOnline handleClickOrderOnlineCard={handleClickOrderOnlineCard} />
            )
          }
        />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div ref={refAddedToBasket} className="added_to_basket" aria-live="polite">
        <span>Added to cart</span>
      </div>
    </main>
  );
};

export default Main;
