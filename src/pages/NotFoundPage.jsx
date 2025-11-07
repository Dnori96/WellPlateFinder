import { Link } from 'react-router-dom';
import { ROUTES_PAGES } from '@/const/pages';

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-dvh">
      Page Not Found
      <Link to={ROUTES_PAGES.HOME}>
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
