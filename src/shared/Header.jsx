import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Container from './Container.jsx';

import css from '../styles/Header.module.css';

const Header = () => {
  const setClassName = ({ isActive }) =>
    clsx(css.navLinkItem, { [css.activeLink]: isActive });

  return (
    <header className={css.headerWrapper}>
      <Container>
        <nav className={css.navList}>
          <NavLink to="/" className={setClassName}>
            home
          </NavLink>
          <NavLink to="/catalog" className={setClassName}>
            catalog
          </NavLink>
          <NavLink to="/favorites" className={setClassName}>
            favorites
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
