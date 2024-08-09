import clsx from 'clsx';
import css from '../styles/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const setClassName = ({ isActive }) =>
    clsx(css.navLinkItem, { [css.activeLink]: isActive });

  return (
    <header className={css.headerWrapper}>
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
    </header>
  );
};

export default Header;
