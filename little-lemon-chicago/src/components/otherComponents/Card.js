import React from 'react';
import styles from './../../styles/components_styles/card.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/buce.svg';
import styles_mobile from '../../styles/mobile/card_mobile.module.scss';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const Card = ({ card, orderBtn = true, onClick, cardOrderButton }) => {
  const pageSel = useSelector(pageSelector);
  const style = pageSel.isMobile ? styles_mobile : styles;

  return (
    <div className={style.card} role={'product card'}>
      <figure>
        <img className={style.img_card} loading={'eager'} src={card.image} alt={card.title} />
      </figure>
      <header className={style.header_card}>
        <h3>{card.title}</h3>
        <span>{card.price}</span>
      </header>
      <main className={style.main_card}>
        <p>{card.text}</p>
      </main>
      {orderBtn && (
        <footer className={style.footer_card}>
          <button onClick={onClick} ref={cardOrderButton} id={card.id} className={style.order_button} type="ADDED">
            Order a Delivery
            <Logo alt="Delivery logo" className={style.delivery_logo} />
          </button>
        </footer>
      )}
    </div>
  );
};

export default Card;
