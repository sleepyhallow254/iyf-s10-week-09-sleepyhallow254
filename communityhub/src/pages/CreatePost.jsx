import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { Button, Input, Card } from '../components/shared';

function CreatePost() {
  const [savedPosts, setSavedPosts] = useLocalStorage('communityhub-posts', []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Please add a title and body for your post.');
      setSuccess(false);
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString()
    };

    setSavedPosts([newPost, ...savedPosts]);
    setTitle('');
    setBody('');
    setError('');
    setSuccess(true);

    setTimeout(() => {
      navigate('/posts');
    }, 800);
  };

  return (
    <div className="page create-post-page">
      <h1>Create a New Post</h1>
      <Card className="create-post-card">
        <form onSubmit={handleSubmit} className="create-post-form">
          <Input
            label="Post title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title"
            required
          />

          <label className="input-label" htmlFor="body">
            Post body <span className="input-required">*</span>
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write the post content"
            className="shared-textarea"
          />

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">Post created locally — redirecting to posts.</p>}

          <Button type="submit">Save Post</Button>
        </form>
      </Card>
    </div>
  );
}

export default CreatePost;
