import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  Filter,
  MapPin,
  Search,
  Users,
  Wallet,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

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

  return (
    <article className="project-card">
      <div
        style={{
          height: 170,
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: 18,
          background: "var(--card-2)",
        }}
      >
        <img
          src={project.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="flex justify-between items-start gap-16">
        <div className="min-w-0">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>

        <span className={`status-pill ${statusClass}`}>
          {projectStatusLabels[project.status]}
        </span>
      </div>

      <div className="flex items-center gap-8 mt-16 text-muted">
        <MapPin size={16} aria-hidden="true" />
        <span>{project.location}</span>
      </div>

      <div className="flex items-center gap-8 mt-8 text-muted">
        <Building2 size={16} aria-hidden="true" />
        <span>{project.client}</span>
      </div>

      <div className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <strong>Progresso</strong>
          <span className="text-muted">{project.progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className="content-grid grid-2 mt-20">
        <div className="flex items-center gap-8 text-muted">
          <Wallet size={16} aria-hidden="true" />
          <span>{project.budget}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <Users size={16} aria-hidden="true" />
          <span>{project.teamSize} pessoas</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <CalendarClock size={16} aria-hidden="true" />
          <span>{project.deadline}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <AlertTriangle size={16} aria-hidden="true" />
          <span>{project.alerts} alertas</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 mt-20">
        <div className="flex items-center gap-8">
          <span className={`badge badge--${priorityClass}`}>
            {projectPriorityLabels[project.priority]}
          </span>

          <span className="status-pill blue">{project.type}</span>
        </div>

        <button type="button" className="btn--ghost">
          Ver projeto
        </button>
      </div>
    </article>
  );
}

function HighlightPanel() {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Projetos em destaque</h2>
            <p>Obras com prioridade crítica, atraso ou atenção operacional.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />

          <div>
            <strong>{highlightedProjects.length} projetos sensíveis</strong>
            <p className="text-muted mt-4">
              Exigem acompanhamento mais próximo da gestão.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Prioridade</h2>
            <p>Projetos com maior risco operacional.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {highlightedProjects.slice(0, 5).map((project) => {
            const priorityClass =
              projectPriorityClasses[project.priority] || "blue";

            return (
              <div key={project.id} className="file-item">
                <img
                  src={project.image}
                  alt=""
                  className="file-icon"
                  style={{ objectFit: "cover", padding: 0 }}
                />

                <div className="file-info">
                  <strong>{project.name}</strong>
                  <span>{project.location}</span>
                </div>

                <span className={`status-pill ${priorityClass}`}>
                  {project.progress}%
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Tipos de obra</h2>
            <p>Categorias cadastradas na base.</p>
          </div>
        </div>

        <div className="flex gap-8 mt-20" style={{ flexWrap: "wrap" }}>
          {projectTypes.map((type) => (
            <span key={type} className="status-pill blue">
              {type}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch) ||
        project.client.toLowerCase().includes(normalizedSearch) ||
        project.location.toLowerCase().includes(normalizedSearch) ||
        project.type.toLowerCase().includes(normalizedSearch) ||
        project.manager.toLowerCase().includes(normalizedSearch);

      const matchesFilter =
        activeFilter === "all" ||
        project.status === activeFilter ||
        project.priority === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <AppShell
      activePage="projetos"
      title="Projetos"
      description="Gerencie obras, equipes, prazos, orçamento, progresso e riscos operacionais."
      newButtonLabel="Novo projeto"
    >
      <section className="summary-grid">
        {projectStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="card card--compact">
        <div className="flex justify-between items-center gap-16">
          <label className="search search-input">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Buscar projetos</span>
            <input
              type="search"
              placeholder="Buscar por projeto, cliente, cidade, tipo ou gestor..."
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
      </section>

      <section className="layout">
        <div className="section">
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
                  <CheckCircle2 size={24} aria-hidden="true" />
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

        <HighlightPanel />
      </section>
    </AppShell>
  );
}

export const Projetos = Projects;

export default Projects;