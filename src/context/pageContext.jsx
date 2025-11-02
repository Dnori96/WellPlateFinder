import { createContext, useState } from 'react';

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState('h');

  const changeFocusPage = (newPage) => {
    if (newPage == page) return;
    setPage(newPage);
  };

  return <PageContext.Provider value={{ page, setPage, changeFocusPage }}>{children}</PageContext.Provider>;
}
