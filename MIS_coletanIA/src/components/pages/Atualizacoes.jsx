import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  Filter,
  Image,
  MapPin,
  MessageCircle,
  Paperclip,
  Search,
  ThumbsUp,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  updates,
  updateStats,
  updateFilters,
  updateTypeLabels,
  updateTypeClasses,
  updateStatusLabels,
  updateStatusClasses,
  updatePriorityLabels,
  updatePriorityClasses,
  recentUpdates,
  attentionUpdates,
  documentUpdates,
  mediaUpdates,
} from "../data/updates";

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

function UpdateCard({ update }) {
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
          <span className={`priority ${typeClass}`}>
            <TypeIcon size={16} aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <div className="flex items-center gap-8 mb-8">
              <h3>{update.title}</h3>

              {update.priority === "critical" && (
                <span className="status-pill red">Crítico</span>
              )}
            </div>

            <p className="text-muted">{update.description}</p>
          </div>
        </div>

        <span className={`status-pill ${typeClass}`}>
          {updateTypeLabels[update.type]}
        </span>
      </div>

      <div className="content-grid grid-4 mt-20">
        <div className="flex items-center gap-8 text-muted">
          <Building2 size={16} aria-hidden="true" />
          <span>{update.project}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <MapPin size={16} aria-hidden="true" />
          <span>{update.location}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <User size={16} aria-hidden="true" />
          <span>{update.author}</span>
        </div>

        <div className="flex items-center gap-8 text-muted">
          <CalendarClock size={16} aria-hidden="true" />
          <span>{update.timeLabel}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 mt-20">
        <div className="flex items-center gap-8">
          <span className={`badge badge--${statusClass}`}>
            {updateStatusLabels[update.status]}
          </span>

          <span className={`status-pill ${priorityClass}`}>
            {updatePriorityLabels[update.priority]}
          </span>

          <span className="status-pill blue">{update.category}</span>
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

function SidePanel() {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Resumo do feed</h2>
            <p>Movimentações recentes da operação.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />

          <div>
            <strong>{attentionUpdates.length} em atenção</strong>
            <p className="text-muted mt-4">
              Atualizações com risco, alerta ou prioridade crítica.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <FileText size={20} aria-hidden="true" />

          <div>
            <strong>{documentUpdates.length} documentos</strong>
            <p className="text-muted mt-4">
              Arquivos, medições e revisões publicados.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <Image size={20} aria-hidden="true" />

          <div>
            <strong>{mediaUpdates.length} registros de mídia</strong>
            <p className="text-muted mt-4">
              Fotos e anexos visuais adicionados às obras.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Recentes</h2>
            <p>Últimas movimentações registradas.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {recentUpdates.map((update) => {
            const TypeIcon = getUpdateIcon(update.type);
            const typeClass = updateTypeClasses[update.type] || "blue";

            return (
              <div key={update.id} className="file-item">
                <div className={`file-icon badge--${typeClass}`}>
                  <TypeIcon size={18} aria-hidden="true" />
                </div>

                <div className="file-info">
                  <strong>{update.title}</strong>
                  <span>{update.project}</span>
                </div>

                <span className="file-status">{update.timeLabel}</span>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export function Atualizacoes() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUpdates = useMemo(() => {
    return updates.filter((update) => {
      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        update.title.toLowerCase().includes(normalizedSearch) ||
        update.description.toLowerCase().includes(normalizedSearch) ||
        update.project.toLowerCase().includes(normalizedSearch) ||
        update.category.toLowerCase().includes(normalizedSearch) ||
        update.author.toLowerCase().includes(normalizedSearch);

      const matchesFilter =
        activeFilter === "all" ||
        update.type === activeFilter ||
        update.status === activeFilter ||
        update.priority === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <AppShell
      activePage="atualizacoes"
      title="Atualizações"
      description="Acompanhe movimentações, registros, documentos e mudanças relevantes das obras."
      newButtonLabel="Nova atualização"
    >
      <section className="summary-grid">
        {updateStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="layout alerts-layout">
        <div className="section">
          <div className="card card--compact">
            <div className="flex justify-between items-center gap-16">
              <label className="search search-input">
                <Search size={18} aria-hidden="true" />
                <span className="sr-only">Buscar atualizações</span>

                <input
                  type="search"
                  placeholder="Buscar por atualização, obra, autor ou categoria..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>

              <div className="tabs">
                <Filter size={16} aria-hidden="true" />

                {updateFilters.map((filter) => (
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
              <h2>Feed de atualizações</h2>
              <p>
                {filteredUpdates.length} atualização
                {filteredUpdates.length !== 1
                  ? "ões encontradas"
                  : " encontrada"}
              </p>
            </div>
          </div>

          <div className="alerts">
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <CheckCircle2 size={24} aria-hidden="true" />

                  <div>
                    <strong>Nenhuma atualização encontrada</strong>
                    <p className="text-muted mt-4">
                      Ajuste os filtros ou tente buscar por outro termo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <SidePanel />
      </section>
    </AppShell>
  );
}

export default Atualizacoes;