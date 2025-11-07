import { createContext, useState } from 'react';
import { pages } from '@/const/pages';

export const PageContext = createContext();

const PAGE_KEY = 'page-WPF-KEY';

export default function PageProvider({ children }) {
  const [page, setPage] = useState(sessionStorage.getItem(PAGE_KEY) || pages.HOME);

  const changeFocusPage = (newPage) => {
    if (newPage == page) return;
    setPage(newPage);
    sessionStorage.setItem(PAGE_KEY, newPage);
  };

  return <PageContext.Provider value={{ page, setPage, changeFocusPage }}>{children}</PageContext.Provider>;
}
