import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CampersList from '../components/CampersList.jsx';
import Section from '../shared/Section.jsx';

import {
  renderMore,
  selectCampers,
  selectFetchNext,
  selectNextCampers,
  selectPage,
  selectQuery,
} from '../redux/adverts/slice.js';
import { getAdverts, getNextAdverts } from '../redux/adverts/operations.js';

import css from '../styles/Catalog.module.css';
import Sidebar from '../shared/Sidebar.jsx';

const Catalog = () => {
  const dispatch = useDispatch();

  const query = useSelector(selectQuery);
  const campers = useSelector(selectCampers);
  const nextCampers = useSelector(selectNextCampers);
  const fetchNext = useSelector(selectFetchNext);
  const page = useSelector(selectPage);

  const handleLoadmore = () => {
    dispatch(renderMore());
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(getAdverts({ page, query }));
    }
  }, [dispatch, page, query]);

  useEffect(() => {
    if (fetchNext) {
      dispatch(getNextAdverts({ page, query }));
    }
  }, [dispatch, fetchNext, page, query]);

  return (
    <Section>
      <div style={{ display: 'flex', gap: 65 }}>
        <Sidebar />
        <div className={css.mainContent}>
          {campers.length > 0 && <CampersList campers={campers} />}
          {nextCampers.length > 0 && (
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

export default Catalog;
