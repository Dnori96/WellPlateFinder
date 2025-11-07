import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '@/context/pageContext';
import { pages, ROUTES_PAGES } from '@/const/pages';

export default function DinamicNavBar({ onPageChange }) {
  const { page } = useContext(PageContext);

  function focusBarNav(focusPage) {
    onPageChange(focusPage);
  }
  return (
    <div className="flex gap-5 xl:gap-10 transition-all duration-150 relative">
      <Link to={ROUTES_PAGES.HOME}>
        <button className="cursor-pointer text-xl" onClick={() => focusBarNav(pages.HOME)}>
          Home
        </button>
        <div id="h-nav" className={`opacity-0 ${page == 'h' ? 'navTitleEffect' : ''}`}></div>
      </Link>
      <Link to={ROUTES_PAGES.ABOUT}>
        <button className="cursor-pointer text-xl" onClick={() => focusBarNav(pages.ABOUT)}>
          About
        </button>
        <div id="a-nav" className={`opacity-0 ${page == 'a' ? 'navTitleEffect' : ''}`}></div>
      </Link>
      <Link to={ROUTES_PAGES.RECIPES}>
        <button className="cursor-pointer text-xl" onClick={() => focusBarNav(pages.RECIPES)}>
          Recipes
        </button>
        <div id="r-nav" className={`opacity-0 ${page == 'r' ? 'navTitleEffect' : ''}`}></div>
      </Link>
    </div>
  );
}
