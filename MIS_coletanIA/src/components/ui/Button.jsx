export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  onClick,
  ...props
}) {
  const variantClasses = {
    primary: "btn btn--primary",
    secondary: "btn--secondary",
    ghost: "btn--ghost",
    icon: "icon-btn btn--icon",
    danger: "btn btn--primary is-danger",
  };

  const sizeClasses = {
    sm: "btn--sm",
    md: "",
    lg: "btn--lg",
  };

  const classes = [
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading ? "true" : undefined}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="btn__loader" aria-hidden="true" />
      ) : (
        leftIcon
      )}

      {variant !== "icon" && children}

      {!loading && rightIcon}
    </button>
  );
}

export function IconButton({
  children,
  label,
  type = "button",
  disabled = false,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={["icon-btn btn--icon", className].filter(Boolean).join(" ")}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;