import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Filter,
  MapPin,
  Search,
  ShieldAlert,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  alerts,
  alertStats,
  alertFilters,
  alertPeriodFilters,
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
  const isResolutionTime = stat.id === "resolution-time";

  return (
    <article className="stat alert-stat-card">
      <div className="alert-stat-head">
        {isResolutionTime && (
          <span className="alert-stat-icon orange">
            <Clock3 size={18} aria-hidden="true" />
          </span>
        )}

        <span>{stat.label}</span>
      </div>

      <strong>{stat.value}</strong>

      <p className={`status-pill ${getToneClass(stat.tone)} mt-12`}>
        {stat.variation}
      </p>
    </article>
  );
}

function getAlertDateInfo(alert) {
  const date = new Date(alert.createdAt);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return {
    date,
    diffDays,
  };
}

function matchesPeriod(alert, activePeriod) {
  if (activePeriod === "all") {
    return true;
  }

  const { diffDays } = getAlertDateInfo(alert);

  if (activePeriod === "today") {
    return diffDays <= 0;
  }

  if (activePeriod === "7d") {
    return diffDays <= 7;
  }

  if (activePeriod === "30d") {
    return diffDays <= 30;
  }

  return true;
}

function AlertRowCard({ alert }) {
  const priorityClass = alertPriorityClasses[alert.priority] || "blue";
  const isCritical = alert.priority === "critical";

  return (
    <article className={`alert-card-clean ${priorityClass}`}>
      <div className="alert-card-clean__top">
        <div className="alert-card-clean__header">
          <div className={`alert-card-clean__icon ${priorityClass}`}>
            {isCritical ? (
              <ShieldAlert size={18} aria-hidden="true" />
            ) : (
              <AlertTriangle size={18} aria-hidden="true" />
            )}
          </div>

          <div className="alert-card-clean__title-block">
            <div className="alert-card-clean__title-row">
              <strong>{alert.title}</strong>

              {alert.status === "unread" && (
                <span className="badge badge--red">Novo</span>
              )}
            </div>

            <p>{alert.description}</p>
          </div>
        </div>

        <span className={`status-pill ${priorityClass}`}>
          {alertPriorityLabels[alert.priority]}
        </span>
      </div>

      <div className="alert-card-clean__meta">
        <span>
          <Building2 size={15} aria-hidden="true" />
          {alert.project}
        </span>

        <span>
          <MapPin size={15} aria-hidden="true" />
          {alert.location}
        </span>

        <span>
          <User size={15} aria-hidden="true" />
          {alert.responsible}
        </span>

        <span>
          <CalendarClock size={15} aria-hidden="true" />
          {alert.dueDate}
        </span>
      </div>

      <div className="alert-card-clean__footer">
        <div className="alert-card-clean__tags">
          <span className={`badge badge--${priorityClass}`}>
            {alert.category}
          </span>

          <span
            className={`badge ${
              alert.status === "unread" ? "badge--blue" : "badge--green"
            }`}
          >
            {alertStatusLabels[alert.status]}
          </span>
        </div>

        <div className="alert-card-clean__actions">
          <button type="button" className="btn btn--success-soft">
            <CheckCircle2 size={16} aria-hidden="true" />
            Resolver
          </button>

          <button type="button" className="btn btn--ghost-soft">
            Ignorar
          </button>

          <button type="button" className="btn btn--outline-soft">
            Ver detalhes
          </button>
        </div>
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
          {criticalAlerts.slice(0, 4).map((alert) => (
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
  const [activePeriod, setActivePeriod] = useState("all");
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

      const matchesTimePeriod = matchesPeriod(alert, activePeriod);

      return matchesSearch && matchesFilter && matchesTimePeriod;
    });
  }, [activeFilter, activePeriod, searchTerm]);

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

              <div className="alert-filter-group">
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

                <div className="tabs alert-period-tabs">
                  <Clock3 size={16} aria-hidden="true" />

                  {alertPeriodFilters.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      className={activePeriod === filter.id ? "active" : ""}
                      onClick={() => setActivePeriod(filter.id)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
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

          <div className="alerts alert-row-list">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert) => (
                <AlertRowCard key={alert.id} alert={alert} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <CheckCircle2 size={24} aria-hidden="true" />

                  <div>
                    <strong>Nenhum alerta encontrado</strong>
                    <p className="text-muted mt-4">
                      Ajuste os filtros, período ou tente buscar por outro termo.
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