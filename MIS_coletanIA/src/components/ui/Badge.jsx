const toneClasses = {
  red: "badge--red",
  orange: "badge--warning",
  yellow: "badge--warning",
  green: "badge--success",
  blue: "badge--info",
  purple: "badge--purple",
  default: "",
};

export function Badge({
  children,
  tone = "default",
  className = "",
  size = "md",
  as: Component = "span",
}) {
  const toneClass = toneClasses[tone] || toneClasses.default;

  return (
    <Component
      className={[
        "badge",
        toneClass,
        size === "sm" ? "badge--sm" : "",
        size === "lg" ? "badge--lg" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}

export function StatusBadge({ children, tone = "blue", className = "" }) {
  return (
    <Badge tone={tone} className={`status-pill ${tone} ${className}`}>
      {children}
    </Badge>
  );
}

export default Badge;