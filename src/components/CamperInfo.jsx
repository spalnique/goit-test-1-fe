import { useState } from 'react';
import css from '../styles/CamperInfo.module.css';
import Features from './Features.jsx';
import Reviews from './Reviews.jsx';

import clsx from 'clsx';

const CamperInfo = ({ camper }) => {
  const [selector, setSelector] = useState('features');

  const handleSelector = (e) => {
    if (selector === e.target.textContent.toLowerCase()) return;
    setSelector(e.target.textContent.toLowerCase());
  };

  return (
    <>
      <div className={css.titleLocationPriceWrapper}>
        <p className={css.title}>{camper.name}</p>
        <div className={css.locationRatingWrapper}>
          <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          <p>{camper.location.split(', ').reverse().join(', ')}</p>
        </div>
        <p className={css.price}>{`€${camper.price}.00`}</p>
      </div>
      <div className={css.camperInfoWrapper}>
        <div className={css.imagesWrapper}>
          {camper.gallery.map((image) => (
            <img
              key={image}
              src={image}
              alt="Camper's photo"
              className={css.camperImage}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={css.descriptionText}>{camper.description}</p>
        <div className={css.selector}>
          <span
            className={clsx(css.selectorButton, {
              [css.activeButton]: selector === 'features',
            })}
            onClick={handleSelector}>
            Features
          </span>
          <span
            className={clsx(css.selectorButton, {
              [css.activeButton]: selector === 'reviews',
            })}
            onClick={handleSelector}>
            Reviews
          </span>
        </div>
        <div className={css.featuresReviewsWrapper}>
          {selector === 'features' && <Features camper={camper} />}
          {selector === 'reviews' && <Reviews reviews={camper.reviews} />}
        </div>
      </div>
    </>
  );
};

export default CamperInfo;
