import icons from '../assets/icons/icons.svg';
import css from '../styles/Reviews.module.css';

const Reviews = ({ reviews }) => {
  const rating = Array.from({ length: 5 });

  return (
    <ul className={css.reviewList}>
      {reviews.map((review) => (
        <li key={review.reviewer_name}>
          <div className={css.userInfoWrapper}>
            <span className={css.reviewerLogo}>{review.reviewer_name[0]}</span>
            <div className={css.userNameRatingWrapper}>
              <p className={css.userName}>{review.reviewer_name}</p>
              <div>
                {rating.map((_, i) => (
                  <svg
                    key={i}
                    width={16}
                    height={16}
                    fill={i < review.reviewer_rating ? '#ffc531' : '#f2f4f7'}>
                    <use xlinkHref={`${icons}#star`} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
