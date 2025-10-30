import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <Link to={'/recipes'}>
        <button>Recipes</button>
      </Link>
    </nav>
  );
}
