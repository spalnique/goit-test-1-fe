import CampersListItem from './CampersListItem.jsx';

const CampersList = ({ campers }) => {
  return (
    <ul>
      {campers.map((camper) => (
        <CampersListItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
