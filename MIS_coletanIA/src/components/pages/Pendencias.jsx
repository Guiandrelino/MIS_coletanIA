import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  ClipboardList,
  Filter,
  MapPin,
  Search,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  tasks,
  taskStats,
  taskFilters,
  taskStatusLabels,
  taskStatusClasses,
  taskPriorityLabels,
  taskPriorityClasses,
  kanbanColumns,
  criticalTasks,
  openTasks,
  overdueTasks,
} from "../data/task";

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

function TaskCard({ task }) {
  const statusClass = taskStatusClasses[task.status] || "blue";
  const priorityClass = taskPriorityClasses[task.priority] || "blue";

  return (
    <article
      className={`task ${
        task.priority === "critical" ? "is-critical" : ""
      } ${task.priority === "high" ? "is-warning" : ""}`}
    >
      <div className="flex justify-between items-start gap-16">
        <div className="flex items-start gap-12 min-w-0">
          <span className={`priority ${priorityClass}`}>
            <CheckSquare size={16} aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <div className="flex items-center gap-8 mb-8">
              <h3>{task.title}</h3>

              {task.priority === "critical" && (
                <span className="status-pill red">Crítica</span>
              )}
            </div>

            <p className="text-muted">{task.description}</p>
          </div>
        </div>

        <span className={`status-pill ${statusClass}`}>
          {taskStatusLabels[task.status]}
        </span>
      </div>

      <div className="content-grid grid-4 mt-20">
        <div className="flex items-center gap-8 text-muted">
          <Building2 size={16} aria-hidden="true" />
          <span>{task.project}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <MapPin size={16} aria-hidden="true" />
          <span>{task.location}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <User size={16} aria-hidden="true" />
          <span>{task.responsible}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <CalendarClock size={16} aria-hidden="true" />
          <span>{task.dueDate}</span>
        </div>
      </div>

      <div className="mt-20">
        <strong className="text-soft">Checklist</strong>

        <div className="alerts mt-12">
          {task.checklist.map((item) => (
            <div key={item} className="flex items-center gap-8 text-muted">
              <CheckCircle2 size={15} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 mt-20">
        <div className="flex items-center gap-8">
          <span className={`badge badge--${priorityClass}`}>
            {taskPriorityLabels[task.priority]}
          </span>

          <span className="status-pill blue">{task.category}</span>
        </div>

        <button type="button" className="btn--ghost">
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

function KanbanBoard() {
  return (
    <section className="content-grid grid-4">
      {kanbanColumns.map((column) => {
        const columnTasks = tasks.filter((task) =>
          column.taskIds.includes(task.id)
        );

        return (
          <article key={column.id} className="kanban-col card">
            <div className="section-head">
              <div>
                <h2>{column.title}</h2>
                <p>{column.description}</p>
              </div>

              <span className="badge">{columnTasks.length}</span>
            </div>

            <div className="alerts mt-20">
              {columnTasks.map((task) => {
                const priorityClass =
                  taskPriorityClasses[task.priority] || "blue";

                return (
                  <article key={task.id} className="file-item">
                    <div className={`file-icon badge--${priorityClass}`}>
                      <ClipboardList size={18} aria-hidden="true" />
                    </div>

                    <div className="file-info">
                      <strong>{task.title}</strong>
                      <span>{task.project}</span>
                    </div>

                    <span className="file-status">{task.dueDate}</span>
                  </article>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}

function PendenciasSidePanel() {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Resumo operacional</h2>
            <p>Pendências que exigem acompanhamento.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />
          <div>
            <strong>{overdueTasks.length} urgentes hoje</strong>
            <p className="text-muted mt-4">
              Tarefas críticas ou de alta prioridade com vencimento imediato.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <AlertTriangle size={20} aria-hidden="true" />
          <div>
            <strong>{criticalTasks.length} críticas</strong>
            <p className="text-muted mt-4">
              Devem ser tratadas antes das demais pendências.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <ClipboardList size={20} aria-hidden="true" />
          <div>
            <strong>{openTasks.length} abertas</strong>
            <p className="text-muted mt-4">
              Ainda não foram concluídas pela operação.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Prioridade</h2>
            <p>Pendências críticas recentes.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {criticalTasks.slice(0, 4).map((task) => (
            <div key={task.id} className="file-item">
              <div className="file-icon">
                <AlertTriangle size={18} aria-hidden="true" />
              </div>

              <div className="file-info">
                <strong>{task.title}</strong>
                <span>{task.project}</span>
              </div>

              <span className="file-status">{task.dueDate}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function Pendencias() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        task.title.toLowerCase().includes(normalizedSearch) ||
        task.description.toLowerCase().includes(normalizedSearch) ||
        task.project.toLowerCase().includes(normalizedSearch) ||
        task.category.toLowerCase().includes(normalizedSearch) ||
        task.responsible.toLowerCase().includes(normalizedSearch);

      const matchesFilter =
        activeFilter === "all" ||
        task.status === activeFilter ||
        task.priority === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <AppShell
      activePage="pendencias"
      title="Pendências"
      description="Controle tarefas abertas, responsáveis, prazos e bloqueios das obras."
      newButtonLabel="Nova pendência"
    >
      <section className="summary-grid">
        {taskStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="card card--compact">
        <div className="flex justify-between items-center gap-16">
          <label className="search search-input">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Buscar pendências</span>
            <input
              type="search"
              placeholder="Buscar por tarefa, obra, responsável ou categoria..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="tabs">
            <Filter size={16} aria-hidden="true" />

            {taskFilters.map((filter) => (
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

          <div className="tabs">
            <button
              type="button"
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
            >
              Lista
            </button>

            <button
              type="button"
              className={viewMode === "kanban" ? "active" : ""}
              onClick={() => setViewMode("kanban")}
            >
              Kanban
            </button>
          </div>
        </div>
      </section>

      {viewMode === "kanban" ? (
        <KanbanBoard />
      ) : (
        <section className="layout tasks-layout">
          <div className="section">
            <div className="section-head">
              <div>
                <h2>Lista de pendências</h2>
                <p>
                  {filteredTasks.length} pendência
                  {filteredTasks.length !== 1
                    ? "s encontradas"
                    : " encontrada"}
                </p>
              </div>
            </div>

            <div className="tasks">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))
              ) : (
                <div className="card">
                  <div className="flex items-center gap-12">
                    <CheckCircle2 size={24} aria-hidden="true" />
                    <div>
                      <strong>Nenhuma pendência encontrada</strong>
                      <p className="text-muted mt-4">
                        Ajuste os filtros ou tente buscar por outro termo.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <PendenciasSidePanel />
        </section>
      )}
    </AppShell>
  );
}

export default Pendencias;