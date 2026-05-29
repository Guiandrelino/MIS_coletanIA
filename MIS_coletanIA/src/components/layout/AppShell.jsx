import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useAppNavigation } from "../../App";

export function AppShell({
  activePage,
  title,
  description,
  actions,
  children,
  fixedHeight = false,
  newButtonLabel,
}) {
  const { navigateTo } = useAppNavigation();

  return (
    <div className="app app-shell">
      <Sidebar activePage={activePage} onNavigate={navigateTo} />

      <main className={`main app-main ${fixedHeight ? "is-fixed-height" : ""}`}>
        <Topbar newButtonLabel={newButtonLabel} />

        {(title || description || actions) && (
          <header className="page-header">
            <div>
              {title && <h1>{title}</h1>}
              {description && <p>{description}</p>}
            </div>

            {actions && <div className="page-header__actions">{actions}</div>}
          </header>
        )}

        {children}
      </main>
    </div>
  );
}

export default AppShell;