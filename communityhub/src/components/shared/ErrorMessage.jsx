function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <p>⚠️ {message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
