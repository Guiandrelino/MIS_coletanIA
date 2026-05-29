import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  Image,
  MapPin,
  MessageCircle,
  Paperclip,
  Search,
  Send,
  ThumbsUp,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  updates,
  updateTypeLabels,
  updateTypeClasses,
  updateStatusLabels,
  updateStatusClasses,
  updatePriorityClasses,
  attentionUpdates,
  recentUpdates,
} from "../data/updates";

import { alerts } from "../data/alerts";
import { projects } from "../data/projects";

function getUpdateIcon(type) {
  const iconMap = {
    progress: CheckCircle2,
    warning: AlertTriangle,
    document: FileText,
    media: Image,
    success: CheckCircle2,
    alert: AlertTriangle,
  };

  return iconMap[type] || FileText;
}

function FeedComposer() {
  return (
    <section className="composer">
      <div className="flex items-start gap-12">
        <div className="avatar" aria-hidden="true">
          EN
        </div>

        <div className="w-full">
          <label className="sr-only" htmlFor="feed-message">
            Criar atualização
          </label>

          <textarea
            id="feed-message"
            rows="3"
            placeholder="Compartilhe uma atualização da obra..."
            className="w-full"
            style={{
              resize: "none",
              color: "var(--text)",
              lineHeight: 1.5,
            }}
          />

          <div className="flex justify-between items-center gap-16 mt-16">
            <div className="flex items-center gap-8">
              <button type="button" className="btn--ghost">
                <Paperclip size={16} aria-hidden="true" />
                Anexo
              </button>

              <button type="button" className="btn--ghost">
                <Image size={16} aria-hidden="true" />
                Foto
              </button>
            </div>

            <button type="button" className="btn btn--primary">
              <Send size={16} aria-hidden="true" />
              Publicar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedPost({ update }) {
  const TypeIcon = getUpdateIcon(update.type);
  const typeClass = updateTypeClasses[update.type] || "blue";
  const statusClass = updateStatusClasses[update.status] || "blue";
  const priorityClass = updatePriorityClasses[update.priority] || "blue";

  return (
    <article
      className={`alert ${
        update.priority === "critical" ? "is-critical" : ""
      } ${update.status === "attention" ? "is-warning" : ""}`}
    >
      <div className="flex justify-between items-start gap-16">
        <div className="flex items-start gap-12 min-w-0">
          <div className="avatar" aria-hidden="true">
            {update.author
              .split(" ")
              .map((name) => name[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-8">
              <strong>{update.author}</strong>
              <span className="text-muted">•</span>
              <span className="text-muted">{update.role}</span>
            </div>

            <div className="flex items-center gap-8 mt-4 text-muted">
              <Building2 size={15} aria-hidden="true" />
              <span>{update.project}</span>
              <span>•</span>
              <span>{update.timeLabel}</span>
            </div>
          </div>
        </div>

        <span className={`status-pill ${typeClass}`}>
          <TypeIcon size={14} aria-hidden="true" />
          {updateTypeLabels[update.type]}
        </span>
      </div>

      <div className="mt-20">
        <h3>{update.title}</h3>
        <p className="text-muted mt-8">{update.description}</p>
      </div>

      <div className="content-grid grid-3 mt-20">
        <div className="flex items-center gap-8 text-muted">
          <MapPin size={16} aria-hidden="true" />
          <span>{update.location}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <CalendarClock size={16} aria-hidden="true" />
          <span>{update.timeLabel}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <User size={16} aria-hidden="true" />
          <span>{update.category}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 mt-20">
        <div className="flex items-center gap-8">
          <span className={`badge badge--${statusClass}`}>
            {updateStatusLabels[update.status]}
          </span>

          <span className={`status-pill ${priorityClass}`}>
            {update.priority === "critical" ? "Crítica" : "Prioridade"}
          </span>
        </div>

        <div className="flex items-center gap-12 text-muted">
          <span className="flex items-center gap-4">
            <Paperclip size={15} aria-hidden="true" />
            {update.attachments}
          </span>

          <span className="flex items-center gap-4">
            <MessageCircle size={15} aria-hidden="true" />
            {update.comments}
          </span>

          <span className="flex items-center gap-4">
            <ThumbsUp size={15} aria-hidden="true" />
            {update.likes}
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectPanel() {
  return (
    <aside className="obra-panel section">
      <div className="section-head">
        <div>
          <h2>Obras ativas</h2>
          <p>Projetos com movimentação recente.</p>
        </div>
      </div>

      <div className="alerts">
        {projects.slice(0, 5).map((project) => (
          <article key={project.id} className="file-item">
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

            <span className="file-status">{project.progress}%</span>
          </article>
        ))}
      </div>
    </aside>
  );
}

function InfoPanel() {
  return (
    <aside className="info-panel section">
      <section>
        <div className="section-head">
          <div>
            <h2>Em atenção</h2>
            <p>Riscos e atualizações críticas.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {attentionUpdates.slice(0, 3).map((update) => (
            <article key={update.id} className="file-item">
              <div className="file-icon">
                <AlertTriangle size={18} aria-hidden="true" />
              </div>

              <div className="file-info">
                <strong>{update.title}</strong>
                <span>{update.project}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="section-head">
          <div>
            <h2>Alertas recentes</h2>
            <p>Eventos pendentes de análise.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {alerts.slice(0, 4).map((alert) => (
            <article key={alert.id} className="file-item">
              <div className="file-icon">
                <AlertTriangle size={18} aria-hidden="true" />
              </div>

              <div className="file-info">
                <strong>{alert.title}</strong>
                <span>{alert.project}</span>
              </div>

              <span className="file-status">{alert.dueDate}</span>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function Feed() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUpdates = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();

    return updates.filter((update) => {
      return (
        update.title.toLowerCase().includes(normalizedSearch) ||
        update.description.toLowerCase().includes(normalizedSearch) ||
        update.project.toLowerCase().includes(normalizedSearch) ||
        update.author.toLowerCase().includes(normalizedSearch) ||
        update.category.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [searchTerm]);

  return (
    <AppShell
      activePage="feed"
      title="MIS Feed"
      description="Acompanhe em tempo real as principais movimentações, alertas e registros das obras."
      newButtonLabel="Nova publicação"
      fixedHeight={false}
    >
      <section className="center feed-layout">
        <ProjectPanel />

        <main className="feed-panel section">
          <FeedComposer />

          <div className="card card--compact">
            <label className="search search-input">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Buscar no feed</span>
              <input
                type="search"
                placeholder="Buscar por obra, autor, categoria ou atualização..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="group-head">
            <span className="title">Atualizações recentes</span>
            <span className="line" />
          </div>

          <div className="alerts">
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((update) => (
                <FeedPost key={update.id} update={update} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <CheckCircle2 size={24} aria-hidden="true" />
                  <div>
                    <strong>Nenhuma publicação encontrada</strong>
                    <p className="text-muted mt-4">
                      Ajuste a busca para localizar outras movimentações.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <InfoPanel />
      </section>
    </AppShell>
  );
}

export default Feed;