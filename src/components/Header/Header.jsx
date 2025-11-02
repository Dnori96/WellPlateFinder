import { Link } from 'react-router-dom';
import logo from '@/images/logo.svg';
import menuHam from '@/images/icons/icon-hamburger-menu.svg';
import DinamicNavBar from '@/components/Header/DinamicNavBar';
import { useContext } from 'react';
import HamburgerMenu from '@/components/Header/HamburgerMenu';
import { PageContext } from '@/context/pageContext';

export default function Header() {
  const { changeFocusPage } = useContext(PageContext);

  const sideMenu = () => {
    const opts = document.getElementById('opts');
    let onDisplay = false;
    opts.className = `${opts.className == 'hidden' ? (onDisplay = true) : onDisplay}`;

    if (onDisplay) return (opts.className = 'flex cursor-pointer menuSettings');

    return (opts.className = 'hidden');
  };

  return (
    <nav className="text-lg z-30 font-medium bg-primary-Neutral-100 text-primary-Neutral-900">
      <div className="hidden lg:flex justify-between items-center p-[20px_32px_20px_32px] xl:p-[20px_60px] transition-normal duration-150">
        <Link>
          <img
            src={logo}
            alt="Website link logo that says Healthy Recipe Finder"
            aria-label="Link logo that goes to home"
            className="w-[250px]"
            onClick={() => changeFocusPage('h')}
          />
        </Link>
        <DinamicNavBar onPageChange={changeFocusPage} />
        <Link to={'/recipes'}>
          <button className="browseButtom" onClick={() => changeFocusPage('r')}>
            Browse recipes
          </button>
        </Link>
      </div>

      <div className="flex lg:hidden justify-between items-center relative p-4 w-full">
        <Link>
          <img
            src={logo}
            alt="Website link logo that says Healthy Recipe Finder"
            aria-label="Link logo that goes to home"
            className="w-[250px]"
            onClick={() => changeFocusPage('h')}
          />
        </Link>
        <menu>
          <button onClick={sideMenu} className="cursor-pointer right-0">
            <img src={menuHam} alt="Side Menu Button" />
          </button>
          <HamburgerMenu />
        </menu>
      </div>
      <div className="bg-primary-Neutral-200 h-px"></div>
    </nav>
  );
}
