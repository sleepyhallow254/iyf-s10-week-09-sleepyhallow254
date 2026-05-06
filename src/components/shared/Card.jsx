function Card({ children, className = '' }) {
  return <div className={`shared-card ${className}`}>{children}</div>;
}

export default Card;
