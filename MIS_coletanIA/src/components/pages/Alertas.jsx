import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Building2,
  CalendarClock,
  CheckCircle2,
  Filter,
  MapPin,
  Search,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  alerts,
  alertStats,
  alertFilters,
  alertPriorityLabels,
  alertPriorityClasses,
  alertStatusLabels,
} from "../data/alerts";

function getToneClass(tone) {
  const toneMap = {
    danger: "red",
    warning: "orange",
    success: "green",
    info: "blue",
    purple: "purple",
  };

  return toneMap[tone] || "blue";
}

function StatCard({ stat }) {
  return (
    <article className="stat">
      <span>{stat.label}</span>
      <strong>{stat.value}</strong>
      <p className={`status-pill ${getToneClass(stat.tone)} mt-12`}>
        {stat.variation}
      </p>
    </article>
  );
}

function AlertCard({ alert }) {
  const priorityClass = alertPriorityClasses[alert.priority] || "blue";
  const isUnread = alert.status === "unread";

  return (
    <article
      className={`alert ${isUnread ? "is-unread" : "is-read"} ${
        alert.priority === "critical" ? "is-critical" : ""
      } ${alert.priority === "warning" ? "is-warning" : ""}`}
    >
      <div className="flex justify-between items-start gap-16">
        <div className="flex items-start gap-12 min-w-0">
          <span className={`priority ${priorityClass}`}>
            <AlertTriangle size={16} aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <div className="flex items-center gap-8 mb-8">
              <h3>{alert.title}</h3>

              {isUnread && <span className="status-pill red">Novo</span>}
            </div>

            <p className="text-muted">{alert.description}</p>
          </div>
        </div>

        <span className={`status-pill ${priorityClass}`}>
          {alertPriorityLabels[alert.priority]}
        </span>
      </div>

      <div className="content-grid grid-4 mt-20">
        <div className="flex items-center gap-8 text-muted">
          <Building2 size={16} aria-hidden="true" />
          <span>{alert.project}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <MapPin size={16} aria-hidden="true" />
          <span>{alert.location}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <User size={16} aria-hidden="true" />
          <span>{alert.responsible}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <CalendarClock size={16} aria-hidden="true" />
          <span>{alert.dueDate}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 mt-20">
        <div className="flex items-center gap-8">
          <span className={`badge badge--${priorityClass}`}>
            {alert.category}
          </span>

          <span className="status-pill blue">
            {alertStatusLabels[alert.status]}
          </span>
        </div>

        <button type="button" className="btn--ghost">
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

function AlertSidePanel({ criticalAlerts, unreadAlerts }) {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Resumo crítico</h2>
            <p>Itens que exigem prioridade operacional.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />

          <div>
            <strong>{criticalAlerts.length} alertas críticos</strong>
            <p className="text-muted mt-4">
              Devem ser tratados antes do próximo ciclo de obra.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <Bell size={20} aria-hidden="true" />

          <div>
            <strong>{unreadAlerts.length} não lidos</strong>
            <p className="text-muted mt-4">
              Ainda aguardam primeira análise da equipe.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Prioridade</h2>
            <p>Alertas críticos recentes.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {criticalAlerts.slice(0, 3).map((alert) => (
            <div key={alert.id} className="file-item">
              <div className="file-icon">
                <AlertTriangle size={18} aria-hidden="true" />
              </div>

              <div className="file-info">
                <strong>{alert.title}</strong>
                <span>{alert.project}</span>
              </div>

              <span className="file-status">{alert.dueDate}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function Alertas() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        alert.title.toLowerCase().includes(normalizedSearch) ||
        alert.description.toLowerCase().includes(normalizedSearch) ||
        alert.project.toLowerCase().includes(normalizedSearch) ||
        alert.category.toLowerCase().includes(normalizedSearch) ||
        alert.responsible.toLowerCase().includes(normalizedSearch);

      const matchesFilter =
        activeFilter === "all" ||
        alert.priority === activeFilter ||
        alert.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  const criticalAlerts = alerts.filter(
    (alert) => alert.priority === "critical"
  );

  const unreadAlerts = alerts.filter((alert) => alert.status === "unread");

  return (
    <AppShell
      activePage="alertas"
      title="Alertas"
      description="Monitore riscos, atrasos, pendências críticas e eventos operacionais das obras."
      newButtonLabel="Novo alerta"
    >
      <section className="summary-grid">
        {alertStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="layout alerts-layout">
        <div className="section">
          <div className="card card--compact">
            <div className="flex justify-between items-center gap-16">
              <label className="search search-input">
                <Search size={18} aria-hidden="true" />
                <span className="sr-only">Buscar alertas</span>

                <input
                  type="search"
                  placeholder="Buscar por alerta, obra ou categoria..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>

              <div className="tabs">
                <Filter size={16} aria-hidden="true" />

                {alertFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={activeFilter === filter.id ? "active" : ""}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="section-head">
            <div>
              <h2>Lista de alertas</h2>
              <p>
                {filteredAlerts.length} alerta
                {filteredAlerts.length !== 1 ? "s encontrados" : " encontrado"}
              </p>
            </div>
          </div>

          <div className="alerts">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <CheckCircle2 size={24} aria-hidden="true" />

                  <div>
                    <strong>Nenhum alerta encontrado</strong>
                    <p className="text-muted mt-4">
                      Ajuste os filtros ou tente buscar por outro termo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <AlertSidePanel
          criticalAlerts={criticalAlerts}
          unreadAlerts={unreadAlerts}
        />
      </section>
    </AppShell>
  );
}

export default Alertas;