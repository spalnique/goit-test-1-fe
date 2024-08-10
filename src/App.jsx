import { Route, Routes } from 'react-router-dom';

import Layout from './shared/Layout.jsx';
import Header from './shared/Header.jsx';
import Modal from './components/Modal.jsx';

import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Favorites from './pages/Favorites.jsx';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Modal />
    </Layout>
  );
}

export default App;
