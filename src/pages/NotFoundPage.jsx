import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Page Not Found
      <Link to={'/'}>
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
