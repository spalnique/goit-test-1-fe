import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CampersList from '../components/CampersList.jsx';

import usePages from '../hooks/usePages.js';

import { getAdverts, getNextAdverts } from '../redux/adverts/operations.js';

import {
  renderMore,
  selectCampers,
  selectNextCampers,
} from '../redux/adverts/slice.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const { page, nextPage } = usePages(1);

  const campers = useSelector(selectCampers);
  const nextCampers = useSelector(selectNextCampers);

  const handleLoadmore = () => {
    dispatch(renderMore());
    nextPage();
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(getAdverts(page));
    }
    dispatch(getNextAdverts(page));
  }, [page]);

  return (
    <>
      {campers.length > 0 && <CampersList campers={campers} />}
      {nextCampers.length > 0 && (
        <button type="button" onClick={handleLoadmore}>
          loadmore
        </button>
      )}
    </>
  );
};

export default Catalog;
