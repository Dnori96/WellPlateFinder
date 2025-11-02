import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-dvh">
      Page Not Found
      <Link to={'/'}>
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
