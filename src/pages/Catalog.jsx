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
import { perPage } from '../redux/constants.js';
import Section from '../shared/Section.jsx';
import Container from '../shared/Container.jsx';

import css from '../styles/Catalog.module.css';
import { getCurrentPage } from '../helpers/getCurrentPage.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const nextCampers = useSelector(selectNextCampers);
  const currentPage = getCurrentPage(campers);
  const { page, nextPage } = usePages(currentPage);

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
    <Section>
      <Container>
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
      </Container>
    </Section>
  );
};

export default Catalog;
