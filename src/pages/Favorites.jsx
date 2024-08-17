import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CampersList from '../components/CampersList.jsx';

import {
  renderMoreFavorites,
  selectFavorites,
  selectFavoritesIds,
  selectNextFavorites,
  selectFavoritesPage,
} from '../redux/favorites/slice.js';

import {
  getNextFavorites,
  getFavorites,
} from '../redux/favorites/operations.js';

import { perPage } from '../redux/constants.js';
import Section from '../shared/Section.jsx';

import css from '../styles/Favorites.module.css';
import Sidebar from '../shared/Sidebar.jsx';

const Favorites = () => {
  const dispatch = useDispatch();

  const favoritesIds = useSelector(selectFavoritesIds);
  const favorites = useSelector(selectFavorites);
  const nextFavorites = useSelector(selectNextFavorites);
  const page = useSelector(selectFavoritesPage);

  const shouldFetch =
    favoritesIds.length !==
    [...new Set([...favorites, ...nextFavorites])].length;

  const shouldFetchNext =
    favorites.length + nextFavorites.length < favoritesIds.length;

  const handleLoadmore = () => {
    dispatch(renderMoreFavorites());
  };

  useEffect(() => {
    if (!shouldFetch) return;

    const firstIndex = 0;
    const lastIndex = perPage * page;
    const idsToFetch = favoritesIds.slice(firstIndex, lastIndex);

    dispatch(getFavorites(idsToFetch));
  }, [dispatch, favoritesIds, page, shouldFetch]);

  useEffect(() => {
    if (!shouldFetchNext) return;

    const firstIndex = perPage * page;
    const lastIndex = perPage * (page + 1);
    const idsToFetch = favoritesIds.slice(firstIndex, lastIndex);

    dispatch(getNextFavorites(idsToFetch));
  }, [dispatch, favoritesIds, page, shouldFetchNext]);

  return (
    <Section>
      <div style={{ display: 'flex', gap: 65 }}>
        <Sidebar></Sidebar>
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
      </div>
    </Section>
  );
};

export default Favorites;
