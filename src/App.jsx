import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './shared/Layout.jsx';
import Header from './shared/Header.jsx';
import Modal from './components/Modal.jsx';

import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Favorites from './pages/Favorites.jsx';
import Sidebar from './shared/Sidebar.jsx';

import Container from './shared/Container.jsx';

import css from './styles/App.module.css';

function App() {
  const { pathname } = useLocation();
  const isCatalog = pathname === '/catalog';

  return (
    <Layout>
      <Header />
      <Container>
        <main className={css.mainWrapper}>
          {/* {isCatalog && <Sidebar />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Container>
      <Modal />
    </Layout>
  );
}

export default App;
