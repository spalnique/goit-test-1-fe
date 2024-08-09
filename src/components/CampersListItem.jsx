import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/slice.js';
import { toggleFavorite } from '../redux/favorites/slice.js';

const CampersListItem = ({ camper }) => {
  const dispatch = useDispatch();

  const handleFavorites = () => {
    dispatch(toggleFavorite(camper));
  };

  const handleModal = () => {
    dispatch(openModal(camper));
  };

  return (
    <li>
      {camper.id}
      <button type="button" onClick={handleFavorites}>
        like
      </button>
      <button type="button" onClick={handleModal}>
        show more
      </button>
    </li>
  );
};

export default CampersListItem;
