import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="not-found-card">
        <div className="not-found-content">
          <p className="not-found-code">404</p>
          <h1>Page not found</h1>
          <p>
            Sorry, we couldn't find the page you're looking for. It might have
            been removed or the link may have been incorrect.
          </p>
          <Link to="/" className="button button-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
