import css from '../styles/Features.module.css';

const Features = ({ camper }) => {
  const detailsToRender = Object.keys(camper.details).filter(
    (item) => item !== 'gas' && item !== 'water' && camper.details[item] !== 0
  );

  return (
    <div className={css.featuresWrapper}>
      <div className={css.specificationsList}>
        <span
          className={
            css.specificationsListItem
          }>{`${camper.adults} adults`}</span>
        <span className={css.specificationsListItem}>
          {camper.transmission}
        </span>
        {detailsToRender.map((detail) => (
          <span key={detail} className={css.specificationsListItem}>
            {camper.details[detail] > 1
              ? `${camper.details[detail]} ${
                  detail.endsWith('s') ? detail : `${detail}s`
                }`
              : `${detail}`}
          </span>
        ))}
      </div>
      <p className={css.vehicleDetailsTitle}>Vehicle details</p>
      <ul className={css.detailList}>
        <li className={css.detailListItem}>
          <span>Form</span>
          <span>
            {camper.form.replace(camper.form[0], camper.form[0].toUpperCase())}
          </span>
        </li>
        <li className={css.detailListItem}>
          <span>Length</span>
          <span>{`${parseFloat(camper.length)} m`}</span>
        </li>
        <li className={css.detailListItem}>
          <span>Width</span>
          <span>{`${parseFloat(camper.width)} m`}</span>
        </li>
        <li className={css.detailListItem}>
          <span>Height</span>
          <span>{`${parseFloat(camper.height)} m`}</span>
        </li>
        <li className={css.detailListItem}>
          <span>Tank</span>
          <span>{`${parseFloat(camper.tank)} l`}</span>
        </li>
        <li className={css.detailListItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
