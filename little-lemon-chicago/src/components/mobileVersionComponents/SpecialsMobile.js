import styles from '../../styles/mobile/specialsMobile.module.scss';
import Card from '../otherComponents/Card';
import SliderMobile from '../otherComponents/Slider';
import { useSelector } from 'react-redux';
import { pageSelector } from '../../features/slices/pageViewSlice';

const SpecialsMobile = ({ data, handleClickOrderOnlineCard, cardOrderButton }) => {
  const pageSel = useSelector(pageSelector);

  return (
    <section className={styles.specials_mobile_section}>
      <div className={styles.specials_mobile_section_title}>
        <h1>This Week's Specials!</h1>
      </div>

      <SliderMobile
        dots={true}
        amoundCards={pageSel.lastWidth < 400 ? 1 : pageSel.lastWidth < 600 ? 2 : 3}
        list={data.map((card) => (
          <li key={card.id} style={{ width: '96%' }} className={styles.special_slider_card}>
            <Card cardOrderButton={cardOrderButton} card={card} onClick={handleClickOrderOnlineCard} />
          </li>
        ))}
      />
    </section>
  );
};

export default SpecialsMobile;
