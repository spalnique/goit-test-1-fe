import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import usePages from '../hooks/usePages.js';

import CampersList from '../components/CampersList.jsx';
import {
  renderMoreFavorites,
  selectFavorites,
  selectFavoritesIds,
  selectNextFavorites,
} from '../redux/favorites/slice.js';

import {
  getNextFavorites,
  getFavorites,
} from '../redux/favorites/operations.js';

import { perPage } from '../redux/constants.js';

const Favorites = () => {
  const dispatch = useDispatch();
  const { page, nextPage } = usePages(1);

  const favoritesIds = useSelector(selectFavoritesIds);
  const favorites = useSelector(selectFavorites);
  const nextFavorites = useSelector(selectNextFavorites);

  const handleLoadmore = () => {
    dispatch(renderMoreFavorites());
    nextPage();
  };

  useEffect(() => {
    if (page === 1) {
      const idsToFetch = favoritesIds.slice(0, perPage);
      dispatch(getFavorites(idsToFetch));
    }

    const firstIndex = perPage * page;
    const lastIndex = perPage * (page + 1);
    const idsToFetch = favoritesIds.slice(firstIndex, lastIndex);
    dispatch(getNextFavorites(idsToFetch));
  }, [page, favoritesIds]);

  return (
    <>
      {favorites.length > 0 && <CampersList campers={favorites} />}
      {nextFavorites.length > 0 && (
        <button type="button" onClick={handleLoadmore}>
          loadmore
        </button>
      )}
    </>
  );
};

export default Favorites;
