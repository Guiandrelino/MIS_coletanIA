import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  DollarSign,
  Filter,
  MapPin,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";
import { useAppNavigation } from "../../App";

import {
  projects,
  projectStats,
  projectFilters,
  projectTypes,
  highlightedProjects,
  projectStatusLabels,
  projectStatusClasses,
  projectPriorityLabels,
  projectPriorityClasses,
} from "../data/projects";

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

function ProjectCard({ project }) {
  const statusClass = projectStatusClasses[project.status] || "blue";
  const priorityClass = projectPriorityClasses[project.priority] || "blue";

  const isWarning =
    project.status === "attention" ||
    project.status === "delayed" ||
    project.priority === "critical";

  return (
    <article className={`project-card${isWarning ? " is-warning" : ""}`}>
      <img
        src={project.image}
        alt={project.name}
        className="project-card__img"
      />

      <div className="project-card__body">
        <div className="project-card__top">
          <h3>{project.name}</h3>
          <span className={`status-pill ${statusClass}`}>
            {projectStatusLabels[project.status]}
          </span>
        </div>

        <p>{project.description}</p>

        <div className="project-card__info">
          <span>
            <MapPin size={14} aria-hidden="true" />
            {project.location}
          </span>
          <span>
            <Building2 size={14} aria-hidden="true" />
            {project.client}
          </span>
        </div>

        <div className="project-card__progress-header">
          <span>Progresso</span>
          <strong>{project.progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        <div className="project-card__stats">
          <span>
            <DollarSign size={14} aria-hidden="true" />
            {project.budget}
          </span>
          <span>
            <Users size={14} aria-hidden="true" />
            {project.teamSize} pessoas
          </span>
          <span>
            <CalendarClock size={14} aria-hidden="true" />
            {project.deadline}
          </span>
          <span>
            <AlertTriangle size={14} aria-hidden="true" />
            {project.alerts} alertas
          </span>
        </div>

        <div className="project-card__footer">
          <div className="project-card__tags">
            <span className={`badge badge--${priorityClass}`}>
              {projectPriorityLabels[project.priority]}
            </span>
            <span className="status-pill blue">{project.type}</span>
          </div>
          <button type="button" className="btn--ghost project-card__ver-btn">
            Ver projeto
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectSidePanel() {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Projetos em atenção</h2>
            <p>Obras com atraso, status crítico ou risco operacional.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />

          <div>
            <strong>{highlightedProjects.length} projetos exigem ação</strong>
            <p className="text-muted mt-4">
              Priorize revisão de prazo, orçamento e pendências abertas.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Prioridades</h2>
            <p>Projetos críticos ou com maior volume de alertas.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {highlightedProjects.slice(0, 4).map((project) => (
            <article key={project.id} className="file-item">
              <img
                src={project.image}
                alt=""
                className="file-icon"
                style={{ objectFit: "cover", padding: 0 }}
              />

              <div className="file-info">
                <strong>{project.name}</strong>
                <span>
                  {project.pendingItems} pendências • {project.alerts} alertas
                </span>
              </div>

              <span
                className={`status-pill ${
                  project.priority === "critical" ? "red" : "orange"
                }`}
              >
                {project.progress}%
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Resumo executivo</h2>
            <p>Indicadores consolidados da carteira.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          <div className="file-item">
            <div className="file-icon">
              <TrendingUp size={18} aria-hidden="true" />
            </div>

            <div className="file-info">
              <strong>Progresso médio</strong>
              <span>Execução física consolidada</span>
            </div>

            <span className="file-status">
              {Math.round(
                projects.reduce((acc, project) => acc + project.progress, 0) /
                  projects.length
              )}
              %
            </span>
          </div>

          <div className="file-item">
            <div className="file-icon">
              <AlertTriangle size={18} aria-hidden="true" />
            </div>

            <div className="file-info">
              <strong>Alertas ativos</strong>
              <span>Todos os projetos</span>
            </div>

            <span className="file-status">
              {projects.reduce((acc, project) => acc + project.alerts, 0)}
            </span>
          </div>

          <div className="file-item">
            <div className="file-icon">
              <CalendarClock size={18} aria-hidden="true" />
            </div>

            <div className="file-info">
              <strong>Prazos críticos</strong>
              <span>Projetos atrasados ou em atenção</span>
            </div>

            <span className="file-status">{highlightedProjects.length}</span>
          </div>

          <div className="file-item">
            <div className="file-icon">
              <DollarSign size={18} aria-hidden="true" />
            </div>

            <div className="file-info">
              <strong>Controle financeiro</strong>
              <span>Comparar orçamento previsto x realizado</span>
            </div>

            <span className="file-status">Ativo</span>
          </div>
        </div>
      </section>
    </aside>
  );
}

export function Projetos() {
  const { navigateTo } = useAppNavigation();

  const [activeFilter, setActiveFilter] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch) ||
        project.client.toLowerCase().includes(normalizedSearch) ||
        project.location.toLowerCase().includes(normalizedSearch) ||
        project.manager.toLowerCase().includes(normalizedSearch) ||
        project.type.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        activeFilter === "all" ||
        project.status === activeFilter ||
        project.priority === activeFilter;

      const matchesType = activeType === "all" || project.type === activeType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [activeFilter, activeType, searchTerm]);

  return (
    <AppShell
      activePage="projetos"
      title="Projetos"
      description="Acompanhe obras ativas, progresso, riscos, orçamento, responsáveis e prazos de entrega."
      newButtonLabel="Novo projeto"
      onNew={() => navigateTo("upload")}
    >
      <section className="summary-grid">
        {projectStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="layout alerts-layout">
        <div className="section">
          <div className="card card--compact">
            <div className="flex justify-between items-center gap-16">
              <label className="search search-input">
                <Search size={18} aria-hidden="true" />
                <span className="sr-only">Buscar projetos</span>

                <input
                  type="search"
                  placeholder="Buscar por projeto, cliente, cidade ou responsável..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>

              <div className="tabs">
                <Filter size={16} aria-hidden="true" />

                {projectFilters.map((filter) => (
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

            <div className="tabs mt-16">
              <Building2 size={16} aria-hidden="true" />

              <button
                type="button"
                className={activeType === "all" ? "active" : ""}
                onClick={() => setActiveType("all")}
              >
                Todos os tipos
              </button>

              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={activeType === type ? "active" : ""}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="section-head">
            <div>
              <h2>Carteira de projetos</h2>
              <p>
                {filteredProjects.length} projeto
                {filteredProjects.length !== 1
                  ? "s encontrados"
                  : " encontrado"}
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <AlertTriangle size={24} aria-hidden="true" />

                  <div>
                    <strong>Nenhum projeto encontrado</strong>
                    <p className="text-muted mt-4">
                      Ajuste os filtros ou tente buscar por outro termo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <ProjectSidePanel />
      </section>
    </AppShell>
  );
}

export default Projetos;