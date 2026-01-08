import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon,
  className = '',
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' && `btn--${size}`,
    fullWidth && 'btn--full',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
