import { Search, X } from "lucide-react";

export function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  label = "Buscar",
  className = "",
  showShortcut = true,
  shortcut = "Ctrl K",
  clearable = true,
  autoFocus = false,
  ...props
}) {
  function handleChange(event) {
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  }

  function handleClear() {
    if (typeof onChange === "function") {
      onChange("");
    }
  }

  const inputId =
    props.id || `search-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label
      htmlFor={inputId}
      className={["search search-input", className].filter(Boolean).join(" ")}
    >
      <Search size={18} aria-hidden="true" />

      <span className="sr-only">{label}</span>

      <input
        id={inputId}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoFocus={autoFocus}
        {...props}
      />

      {clearable && value ? (
        <button
          type="button"
          className="btn--icon"
          aria-label="Limpar busca"
          onClick={handleClear}
          style={{
            width: 28,
            height: 28,
            boxShadow: "none",
            background: "transparent",
          }}
        >
          <X size={16} aria-hidden="true" />
        </button>
      ) : null}

      {showShortcut && !value ? (
        <span className="kbd" aria-hidden="true">
          {shortcut}
        </span>
      ) : null}
    </label>
  );
}

export default SearchInput;