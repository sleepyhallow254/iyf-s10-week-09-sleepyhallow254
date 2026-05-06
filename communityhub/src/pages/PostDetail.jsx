import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function PostDetail() {
  const { postId } = useParams();
  const [savedPosts] = useLocalStorage('communityhub-posts', []);
  const { data: apiPost, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const post = savedPosts.find((item) => String(item.id) === postId) || apiPost;

  if (loading && !post) {
    return <LoadingSpinner text="Loading post..." />;
  }

  if (error && !post) {
    return <ErrorMessage message={error} />;
  }

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
        <Link to="/posts">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div className="page post-detail-page">
      <Link to="/posts" className="secondary-link">
        ← Back to Posts
      </Link>
      <article className="post-detail-card">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {post.createdAt && (
          <small>Created locally: {new Date(post.createdAt).toLocaleString()}</small>
        )}
      </article>
    </div>
  );
}

export default PostDetail;
