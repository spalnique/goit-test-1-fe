import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getAdverts } from './redux/adverts/operations.js';
// import { getAdverts } from './redux/adverts/operations.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return <></>;
}

export default App;
