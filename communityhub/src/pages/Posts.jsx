import { useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { LoadingSpinner, ErrorMessage, PostCard, Input } from '../components/shared';

function Posts() {
  const [query, setQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const filteredPosts = useMemo(() => {
    if (!posts) return [];

    const term = query.toLowerCase();
    return posts
      .filter((post) =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
      )
      .slice(0, 12);
  }, [posts, query]);

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="page posts-page">
      <div className="posts-header">
        <div>
          <h1>Posts</h1>
          <p>Search, like, and explore posts loaded from JSONPlaceholder.</p>
        </div>

        <Input
          label="Search posts"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or body"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="empty-state">No posts match your search.</p>
      ) : (
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={toggleLike}
              isLiked={Boolean(likedPosts[post.id])}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
