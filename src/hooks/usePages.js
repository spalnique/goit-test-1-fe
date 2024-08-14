import { useState } from 'react';

const usePages = (initPage) => {
  const [page, setPage] = useState(initPage);

  const nextPage = () => setPage(page + 1);

  return { page, nextPage };
};

export default usePages;
