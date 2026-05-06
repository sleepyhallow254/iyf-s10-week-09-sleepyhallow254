function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = ''
}) {
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
    danger: 'button-danger',
    ghost: 'button-ghost'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`shared-button ${variantClasses[variant] || variantClasses.primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
