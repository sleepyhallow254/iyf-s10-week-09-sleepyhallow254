function Input({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  type = 'text',
  required = false
}) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`shared-input ${error ? 'input-error' : ''}`}
      />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
}

export default Input;
