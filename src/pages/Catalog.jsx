import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CampersList from '../components/CampersList.jsx';
import Section from '../shared/Section.jsx';

import {
  renderMore,
  selectCampers,
  selectFetch,
  selectFetchNext,
  selectNextCampers,
  selectPage,
  selectQuery,
} from '../redux/adverts/slice.js';
import { getAdverts, getNextAdverts } from '../redux/adverts/operations.js';

import css from '../styles/Catalog.module.css';
import Sidebar from '../shared/Sidebar.jsx';
import FilterForm from '../components/FilterForm.jsx';

const Catalog = () => {
  const dispatch = useDispatch();

  const query = useSelector(selectQuery);
  const campers = useSelector(selectCampers);
  const nextCampers = useSelector(selectNextCampers);
  const shouldFetchNext = useSelector(selectFetchNext);
  const shouldFetch = useSelector(selectFetch);
  const page = useSelector(selectPage);

  const handleLoadmore = () => {
    dispatch(renderMore());
  };

  useEffect(() => {
    if (!shouldFetch) return;

    dispatch(getAdverts({ page, query }));
  }, [dispatch, page, query, shouldFetch]);

  useEffect(() => {
    if (!shouldFetchNext) return;

    dispatch(getNextAdverts({ page, query }));
  }, [dispatch, shouldFetchNext, page, query]);

  return (
    <Section>
      <div style={{ display: 'flex', gap: 65 }}>
        <Sidebar>
          <FilterForm />
        </Sidebar>

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
