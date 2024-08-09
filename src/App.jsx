import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';

// import useModal from './hooks/useModal.js';

import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Favorites from './pages/Favorites.jsx';
import { useSelector } from 'react-redux';
import { selectModal } from './redux/modal/slice.js';

function App() {
  // const { modal, close } = useModal({ isOpen: false, data: null });

  // const modal = useSelector(selectModal);

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Modal isOpen={modal.isOpen} /> */}
      <Modal />
    </Layout>
  );
}

export default App;
