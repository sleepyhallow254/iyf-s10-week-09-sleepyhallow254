import { Link } from 'react-router-dom';
import Button from './Button';

function PostCard({ post, onLike, isLiked }) {
  return (
    <article className="post-card">
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body.slice(0, 120)}...</p>
      </div>

      <div className="post-actions">
        <Link to={`/posts/${post.id}`} className="post-link">
          Read more
        </Link>
        <Button
          variant={isLiked ? 'danger' : 'secondary'}
          onClick={() => onLike(post.id)}
        >
          {isLiked ? 'Unlike' : 'Like'}
        </Button>
      </div>
    </article>
  );
}

export default PostCard;
