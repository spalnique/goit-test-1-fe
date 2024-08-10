import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/slice.js';
import { toggleFavorite } from '../redux/favorites/slice.js';

import css from '../styles/CampersListItem.module.css';

const CampersListItem = ({ camper }) => {
  const dispatch = useDispatch();

  const handleFavorites = () => {
    dispatch(toggleFavorite(camper));
  };

  const handleModal = () => {
    dispatch(openModal(camper));
  };

  return (
    <li className={css.camperCard}>
      <img
        className={css.camperImage}
        src={camper.gallery[0]}
        alt="Camper's photo"
        width={290}
        height={310}
      />
      <div className={css.infoWrapper}>
        <div className={css.titlePriceLocationRatingWrapper}>
          <div className={css.titlePriceWrapper}>
            <p>{camper.name}</p>
            <div className={css.priceWrapper}>
              <p>{`€${camper.price}.00`}</p>
              <button type="button" onClick={handleFavorites}>
                like
              </button>
            </div>
          </div>
          <div className={css.locationRatingWrapper}>
            <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            <p>{camper.location.split(', ').reverse().join(', ')}</p>
          </div>
        </div>
        <div>
          <p className={css.descriptionText}>{camper.description}</p>
        </div>
        <div className={css.specificationsList}>
          <span
            className={
              css.specificationsListItem
            }>{`${camper.adults} adults`}</span>
          <span className={css.specificationsListItem}>
            {camper.transmission}
          </span>
          <span className={css.specificationsListItem}>{camper.engine}</span>
          {camper.details.kitchen === 1 && (
            <span className={css.specificationsListItem}>kitchen</span>
          )}
          <span className={css.specificationsListItem}>
            {`${camper.details.beds} beds`}
          </span>
          {camper.details.airConditioner === 1 && (
            <span className={css.specificationsListItem}>AC</span>
          )}
        </div>
        <button
          type="button"
          onClick={handleModal}
          className={css.showMoreButton}>
          Show more
        </button>
      </div>
    </li>
  );
};

export default CampersListItem;
