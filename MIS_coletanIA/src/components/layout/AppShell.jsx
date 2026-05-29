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
  newButtonLabel = "Novo",
  showTopbar = true,
  showPageHeader = true,
  className = "",
  onNew,
}) {
  const { navigateTo } = useAppNavigation();

  const hasTitle =
    typeof title === "string" && title.trim().length > 0;

  const hasDescription =
    typeof description === "string" && description.trim().length > 0;

  const hasPageHeaderContent =
    showPageHeader && (hasTitle || hasDescription || actions);

  return (
    <div className={["app app-shell", className].filter(Boolean).join(" ")}>
      <Sidebar activePage={activePage} onNavigate={navigateTo} />

      <main className={`main app-main ${fixedHeight ? "is-fixed-height" : ""}`}>
        {showTopbar && (
          <Topbar
            newButtonLabel={newButtonLabel}
            onNew={onNew}
          />
        )}

        {hasPageHeaderContent && (
          <header className="page-header">
            <div>
              {hasTitle && <h1>{title}</h1>}

              {hasDescription && <p>{description}</p>}
            </div>

            {actions && (
              <div className="page-header__actions">
                {actions}
              </div>
            )}
          </header>
        )}

        {children}
      </main>
    </div>
  );
}

export default AppShell;