import { Link } from 'react-router-dom';

export default function DinamicNavBar({ onPageChange, page }) {
  function focusBarNav(focusPage) {
    onPageChange(focusPage);
  }
  return (
    <div className="flex gap-5 xl:gap-10 transition-all duration-150 relative">
      <Link to={'/'}>
        <button className="cursor-pointer" onClick={() => focusBarNav('h')}>
          Home
        </button>
        <div id="h-nav" className={`opacity-0 ${page == 'h' ? 'navTitleEffect' : ''}`}></div>
      </Link>
      <Link to={'/about'}>
        <button className="cursor-pointer" onClick={() => focusBarNav('a')}>
          About
        </button>
        <div id="a-nav" className={`opacity-0 ${page == 'a' ? 'navTitleEffect' : ''}`}></div>
      </Link>
      <Link to={'/recipes'}>
        <button className="cursor-pointer" onClick={() => focusBarNav('r')}>
          Recipes
        </button>
        <div id="r-nav" className={`opacity-0 ${page == 'r' ? 'navTitleEffect' : ''}`}></div>
      </Link>
    </div>
  );
}
