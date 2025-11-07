import { Link } from 'react-router-dom';
import { ROUTES_PAGES } from '@/const/pages';

export default function HamburgerMenu() {
  const onOptClick = () => {
    const opts = document.getElementById('opts');
    opts.className = 'hidden';
  };
  return (
    <div className="hidden z-99999" id="opts">
      <Link to={ROUTES_PAGES.HOME}>
        <button
          className="cursor-pointer p-[12px_8px] text-primary-strong-950 w-full text-start font-medium"
          onClick={() => setTimeout(onOptClick, 50)}
        >
          Home
        </button>
      </Link>
      <Link to={ROUTES_PAGES.ABOUT}>
        <button
          className="cursor-pointer p-[12px_8px] text-primary-strong-950 w-full text-start font-medium"
          onClick={() => setTimeout(onOptClick, 50)}
        >
          About
        </button>
      </Link>
      <Link to={ROUTES_PAGES.RECIPES}>
        <button
          className="cursor-pointer p-[12px_8px] text-primary-strong-950 w-full text-start font-medium"
          onClick={() => setTimeout(onOptClick, 50)}
        >
          Recipes
        </button>
      </Link>
      <Link to={ROUTES_PAGES.RECIPES}>
        <button
          className="cursor-pointer p-[12px_8px] bg-primary-Neutral-900 w-full rounded-[10px] text-primary-Neutral-0 font-bold"
          onClick={() => setTimeout(onOptClick, 50)}
        >
          Browse recipes
        </button>
      </Link>
    </div>
  );
}
