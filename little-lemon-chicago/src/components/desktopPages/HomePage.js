import React from 'react';
import Chicago from '../desktopComponents/Chicago';
import Specials from '../desktopComponents/Specials';
import CustomersSay from '../desktopComponents/CustomersSay';
import data_menu from '../../data/menuData';
import CustumerSayMobile from '../mobileVersionComponents/CustumerSayMobile';
import ChicagoMobile from '../mobileVersionComponents/ChicagoMobile';
import SpecialsMobile from '../mobileVersionComponents/SpecialsMobile';
import CallToAction from '../desktopComponents/CallToAction';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const HomePage = ({ handleClickOrderOnlineCard, cardOrderButton }) => {
  document.title = 'Little Lemon Restaurant';
  const pageSel = useSelector(pageSelector);

  const specialsData = data_menu.main_dishes;

  return (
    <>
      {/* Call to Action section */}
      {!pageSel.isMobile && <CallToAction role="banner" aria-label="Call to Action" />}

      {/* Specials section */}
      {pageSel.isMobile ? (
        <SpecialsMobile
          cardOrderButton={cardOrderButton}
          handleClickOrderOnlineCard={handleClickOrderOnlineCard}
          data={specialsData.slice(1, 5)}
          role="region"
          aria-labelledby="specials-heading"
        />
      ) : (
        <Specials
          handleClickOrderOnlineCard={handleClickOrderOnlineCard}
          data={specialsData.slice(1, pageSel.lastWidth < 1200 ? 4 : 5)}
          role="region"
          aria-labelledby="specials-heading"
        />
      )}

      {/* Customer reviews section */}
      {pageSel.isMobile ? (
        <CustumerSayMobile role="region" aria-labelledby="customer-reviews-heading" />
      ) : (
        <CustomersSay role="region" aria-labelledby="customer-reviews-heading" />
      )}

      {/* Chicago section */}
      {pageSel.isMobile ? (
        <ChicagoMobile role="region" aria-labelledby="chicago-section-heading" />
      ) : (
        <Chicago role="region" aria-labelledby="chicago-section-heading" />
      )}
    </>
  );
};

export default HomePage;
