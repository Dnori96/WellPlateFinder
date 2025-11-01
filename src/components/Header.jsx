import { Link } from 'react-router-dom';
import logo from '@/images/logo.svg';
import menuHam from '@/images/icons/icon-hamburger-menu.svg';
import DinamicNavBar from './DinamicNavBar';
import { useState } from 'react';

export default function Header() {
  const [page, setPage] = useState('h');
  const sideMenu = () => {
    const opts = document.getElementById('opts');
    opts.className = 'flex cursor-pointer';
  };
  const onOptClick = () => {
    const opts = document.getElementById('opts');
    opts.className = 'hidden cursor-pointer';
  };

  const changeFocusPage = (newPage) => {
    if (newPage == page) return;
    setPage(newPage);
  };
  return (
    <nav className="">
      <div className="hidden lg:flex justify-between items-center p-[20px_32px_20px_32px] xl:p-[20px_60px] transition-normal duration-150">
        <img
          src={logo}
          alt="Website link logo that says Healthy Recipe Finder"
          aria-label="Link logo that goes to home"
          className="w-[250px]"
        />
        <DinamicNavBar onPageChange={changeFocusPage} page={page} />
        <Link to={'/recipes'}>
          <button className="cursor-pointer" onClick={() => changeFocusPage('r')}>
            Browse recipes
          </button>
        </Link>
      </div>
      <div className="flex lg:hidden justify-between items-center relative p-4">
        <img
          src={logo}
          alt="Website link logo that says Healthy Recipe Finder"
          aria-label="Link logo that goes to home"
        />
        <button onClick={sideMenu} className="cursor-pointer right-0">
          <img src={menuHam} alt="Side Menu Button" />
        </button>
        <div className="hidden absolute" id="opts">
          <Link to={'/'}>
            <button className="cursor-pointer" onClick={() => setTimeout(onOptClick, 100)}>
              Home
            </button>
          </Link>
          <Link to={'/about'}>
            <button className="cursor-pointer" onClick={() => setTimeout(onOptClick, 100)}>
              About
            </button>
          </Link>
          <Link to={'/recipes'}>
            <button className="cursor-pointer" onClick={() => setTimeout(onOptClick, 100)}>
              Recipes
            </button>
          </Link>
          <Link to={'/recipes'}>
            <button className="cursor-pointer" onClick={() => setTimeout(onOptClick, 100)}>
              Browse recipes
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-primary-Neutral-300 h-px"></div>
    </nav>
  );
}
