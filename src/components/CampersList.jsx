import CampersListItem from './CampersListItem.jsx';

import css from '../styles/CampersList.module.css';

const CampersList = ({ campers }) => {
  return (
    <ul className={css.campersList}>
      {campers.map((camper) => (
        <CampersListItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
