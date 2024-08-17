import css from '../styles/Sidebar.module.css';

const Sidebar = ({ children }) => {
  return <aside className={css.sidebarWrapper}>{children}</aside>;
};

export default Sidebar;
