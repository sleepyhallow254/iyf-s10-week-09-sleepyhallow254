import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function Home() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );

  return (
    <div className="page home-page">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>CommunityHub</h1>
          <p>
            Explore posts, fetch fresh content from JSONPlaceholder, and build
            your own local post list using React hooks.
          </p>
          <Link to="/create-post" className="button button-primary">
            Create a post
          </Link>
        </div>
        <div className="hero-summary">
          <h2>Recent posts</h2>
          {loading ? (
            <LoadingSpinner text="Loading recent posts..." />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <ul className="recent-posts-list">
              {posts?.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
