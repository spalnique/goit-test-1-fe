import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/modal/slice.js';
import {
  selectFavoritesIds,
  toggleFavorite,
} from '../redux/favorites/slice.js';

import icons from '../assets/icons/icons.svg';
import css from '../styles/CampersListItem.module.css';

const CampersListItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(selectFavoritesIds);

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
              <svg
                width={25}
                height={22}
                fill={favoritesIds.includes(camper.id) ? '#e44848' : '#ffffff'}
                stroke={
                  favoritesIds.includes(camper.id) ? '#e44848' : '#101828'
                }
                onClick={handleFavorites}>
                <use xlinkHref={`${icons}#heart`} />
              </svg>
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
