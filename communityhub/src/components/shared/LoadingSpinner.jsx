function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  return (
    <div className={`loading-spinner ${size}`}>
      <span className="spinner" />
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
