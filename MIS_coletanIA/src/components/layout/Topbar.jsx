import { Bell, Plus, Search, Settings } from "lucide-react";
import { ThemeSwitch } from "../ui/ThemeSwitch";

export function Topbar({
  searchPlaceholder = "Buscar obras, tarefas, alertas...",
  onSearch,
  onNew,
  showNewButton = true,
  newButtonLabel = "Novo",
}) {
  function handleSearch(event) {
    if (typeof onSearch === "function") {
      onSearch(event.target.value);
    }
  }

  return (
    <header className="topbar" aria-label="Barra superior">
      <label className="search search-input">
        <Search aria-hidden="true" />

        <span className="sr-only">Buscar</span>

        <input
          type="search"
          placeholder={searchPlaceholder}
          onChange={handleSearch}
        />

        <span className="kbd" aria-hidden="true">
          Ctrl K
        </span>
      </label>

      <div className="top-actions">
        {showNewButton && (
          <button
            type="button"
            className="btn btn--primary"
            onClick={onNew}
          >
            <Plus aria-hidden="true" />
            {newButtonLabel}
          </button>
        )}

        <button
          type="button"
          className="icon-btn btn--icon"
          aria-label="Abrir notificações"
        >
          <Bell aria-hidden="true" />
          <span className="dot">4</span>
        </button>

        <button
          type="button"
          className="icon-btn btn--icon"
          aria-label="Abrir configurações"
        >
          <Settings aria-hidden="true" />
        </button>

        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Topbar;