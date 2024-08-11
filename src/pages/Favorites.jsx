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
import Section from '../shared/Section.jsx';
import Container from '../shared/Container.jsx';

import css from '../styles/Favorites.module.css';

const Favorites = () => {
  const dispatch = useDispatch();

  const favoritesIds = useSelector(selectFavoritesIds);
  const favorites = useSelector(selectFavorites);
  const nextFavorites = useSelector(selectNextFavorites);

  const { page, nextPage } = usePages(1);

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
    <Section>
      <div className={css.mainContent}>
        {favorites.length > 0 && <CampersList campers={favorites} />}
        {nextFavorites.length > 0 && (
          <button
            type="button"
            onClick={handleLoadmore}
            className={css.loadmoreButton}>
            Loadmore
          </button>
        )}
      </div>
    </Section>
  );
};

export default Favorites;
