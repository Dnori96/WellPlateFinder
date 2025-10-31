import { Link } from 'react-router-dom';
import logo from '@/images/logo.svg';
import menuHam from '@/images/icons/icon-hamburger-menu.svg';

export default function Header() {
  const opts = document.getElementById('opts');
  const sideMenu = () => {
    opts.className = 'flex cursor-pointer';
  };
  const onOptClick = () => {
    opts.className = 'hidden cursor-pointer';
  };
  return (
    <nav className="">
      <div className="hidden md:flex justify-between items-center p-[20px_32px_20px_32px] xl:p-[20px_60px] transition-normal duration-150">
        <img
          src={logo}
          alt="Website link logo that says Healthy Recipe Finder"
          aria-label="Link logo that goes to home"
        />
        <div className="flex gap-5 xl:gap-10 transition-all duration-150">
          <Link to={'/'}>
            <button className="cursor-pointer">Home</button>
          </Link>
          <Link to={'/about'}>
            <button className="cursor-pointer">About</button>
          </Link>
          <Link to={'/recipes'}>
            <button className="cursor-pointer">Recipes</button>
          </Link>
        </div>
        <Link to={'/recipes'}>
          <button className="cursor-pointer">Browse recipes</button>
        </Link>
      </div>
      <div className="flex md:hidden justify-between items-center relative p-4">
        <img
          src={logo}
          alt="Website link logo that says Healthy Recipe Finder"
          aria-label="Link logo that goes to home"
        />
        <button onClick={sideMenu} className="cursor-pointer">
          <img src={menuHam} alt="Side Menu Button" />
        </button>
        <div className="hidden right-0 absolute " id="opts">
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
    </nav>
  );
}
