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
                style={{ cursor: 'pointer' }}
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
            <div className={css.ratingWrapper}>
              <svg width={16} height={16} fill="#ffc531">
                <use xlinkHref={`${icons}#star`} />
              </svg>
              <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            </div>
            <div className={css.locationWrapper}>
              <svg width={16} height={16}>
                <use xlinkHref={`${icons}#location`} />
              </svg>
              <p>{camper.location.split(', ').reverse().join(', ')}</p>
            </div>
          </div>
        </div>
        <div>
          <p className={css.descriptionText}>{camper.description}</p>
        </div>
        <div className={css.specificationsList}>
          <span className={css.specificationsListItem}>
            <svg width={20} height={20}>
              <use xlinkHref={`${icons}#adults`} />
            </svg>
            <p>{`${camper.adults} adults`}</p>
          </span>
          <span className={css.specificationsListItem}>
            <svg width={20} height={20}>
              <use xlinkHref={`${icons}#transmission`} />
            </svg>
            <p>{camper.transmission}</p>
          </span>
          <span className={css.specificationsListItem}>
            <svg width={20} height={20}>
              <use xlinkHref={`${icons}#engine`} />
            </svg>
            <p>{camper.engine}</p>
          </span>
          {camper.details.kitchen === 1 && (
            <span className={css.specificationsListItem}>
              <svg width={20} height={20}>
                <use xlinkHref={`${icons}#kitchen`} />
              </svg>
              <p>kitchen</p>
            </span>
          )}
          <span className={css.specificationsListItem}>
            <svg width={20} height={20}>
              <use xlinkHref={`${icons}#beds`} />
            </svg>
            <p>{`${camper.details.beds} beds`}</p>
          </span>
          {camper.details.airConditioner === 1 && (
            <span className={css.specificationsListItem}>
              <svg width={20} height={20}>
                <use xlinkHref={`${icons}#airConditioner`} />
              </svg>
              <p>AC</p>
            </span>
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
