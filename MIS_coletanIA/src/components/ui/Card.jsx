export function Card({
  children,
  className = "",
  compact = false,
  large = false,
  as: Component = "article",
  ...props
}) {
  const classes = [
    "card",
    compact ? "card--compact" : "",
    large ? "card--large" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export function Panel({
  children,
  className = "",
  as: Component = "section",
  ...props
}) {
  return (
    <Component className={["panel", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Component>
  );
}

export function StatCard({
  label,
  value,
  variation,
  tone = "info",
  icon = null,
  className = "",
}) {
  const toneMap = {
    danger: "red",
    warning: "orange",
    success: "green",
    info: "blue",
    purple: "purple",
  };

  const toneClass = toneMap[tone] || "blue";

  return (
    <article className={["stat", className].filter(Boolean).join(" ")}>
      <div className="flex justify-between items-start gap-12">
        <div>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>

        {icon && (
          <span className={`priority ${toneClass}`} aria-hidden="true">
            {icon}
          </span>
        )}
      </div>

      {variation && (
        <p className={`status-pill ${toneClass} mt-12`}>
          {variation}
        </p>
      )}
    </article>
  );
}

export function SectionCard({
  title,
  description,
  actions,
  children,
  className = "",
}) {
  return (
    <section className={["card", className].filter(Boolean).join(" ")}>
      {(title || description || actions) && (
        <div className="section-head">
          <div>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      {children && <div className="mt-20">{children}</div>}
    </section>
  );
}

export default Card;