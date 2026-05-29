import {
  LayoutDashboard,
  Newspaper,
  FolderKanban,
  Package,
  CheckSquare,
  Bell,
  Upload,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "#dashboard",
    icon: LayoutDashboard,
  },
  {
    key: "feed",
    label: "MIS Feed",
    href: "#feed",
    icon: Newspaper,
  },
  {
    key: "projetos",
    label: "Projetos",
    href: "#projetos",
    icon: FolderKanban,
  },
  {
    key: "suprimentos",
    label: "Suprimentos",
    href: "#suprimentos",
    icon: Package,
  },
  {
    key: "pendencias",
    label: "Pendências",
    href: "#pendencias",
    icon: CheckSquare,
    badge: 7,
  },
  {
    key: "alertas",
    label: "Alertas",
    href: "#alertas",
    icon: Bell,
    badge: 5,
  },
  {
    key: "atualizacoes",
    label: "Atualizações",
    href: "#atualizacoes",
    icon: Newspaper,
  },
  {
    key: "upload",
    label: "Upload",
    href: "#upload",
    icon: Upload,
  },
];

export function Sidebar({ activePage = "dashboard", onNavigate }) {
  function handleNavigate(event, item) {
    event.preventDefault();

    if (typeof onNavigate === "function") {
      onNavigate(item.key);
    }
  }

  return (
    <aside className="sidebar" aria-label="Menu lateral">
      <div className="logo-row sidebar__brand">
        <a
          href="#dashboard"
          className="logo sidebar__logo"
          aria-label="MIS — Dashboard"
          onClick={(event) =>
            handleNavigate(event, {
              key: "dashboard",
            })
          }
        >
          MIS
        </a>

        <span className="logo-text sidebar__logo-text">MIS</span>
      </div>

      <nav className="nav sidebar__nav" aria-label="Menu principal">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.key;

          return (
            <a
              key={item.key}
              href={item.href}
              className={`sidebar__item ${isActive ? "is-active active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              onClick={(event) => handleNavigate(event, item)}
            >
              <Icon aria-hidden="true" />

              <span>{item.label}</span>

              {item.badge ? <span className="badge">{item.badge}</span> : null}
            </a>
          );
        })}
      </nav>

      <div className="user-card sidebar__user">
        <div className="avatar user-card__avatar" aria-hidden="true">
          EN
        </div>

        <div className="min-w-0">
          <div className="name user-card__name">Eduardo Nunes</div>
          <div className="role user-card__role">Gestor MIS</div>
        </div>

        <ChevronDown className="chev user-card__chev" aria-hidden="true" />
      </div>
    </aside>
  );
}

export default Sidebar;