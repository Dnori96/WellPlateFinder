import { createContext, useState } from 'react';

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState(sessionStorage.getItem('page-WPF-KEY') || 'h');

  const changeFocusPage = (newPage) => {
    if (newPage == page) return;
    setPage(newPage);
    sessionStorage.setItem('page-WPF-KEY', newPage);
  };

  return <PageContext.Provider value={{ page, setPage, changeFocusPage }}>{children}</PageContext.Provider>;
}
