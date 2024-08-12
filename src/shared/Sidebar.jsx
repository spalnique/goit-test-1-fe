import FilterForm from '../components/FilterForm.jsx';

import css from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={css.sidebarWrapper}>
      <FilterForm />
    </aside>
  );
};

export default Sidebar;
