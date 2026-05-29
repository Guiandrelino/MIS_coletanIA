import { useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Folder,
  MapPin,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Search,
  TriangleAlert,
  TrendingUp,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

const works = [
  {
    id: "villa-aurora",
    name: "Villa Aurora",
    stage: "Estrutura - Fundação",
    progress: 72,
    city: "Florianópolis, SC",
    cover:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=200&q=80",
    author: "Mariana Costa",
    lastMessage: "Mariana atualizou o avanço...",
    time: "agora",
    unread: 8,
    live: true,
    following: true,
    updatesToday: 8,
    photosToday: 2,
    docsToday: 1,
    inspectionsToday: 1,
    team: [
      { name: "Mariana Costa", role: "Eng. Responsável" },
      { name: "Rafael Souza", role: "Mestre de obras" },
      { name: "João Pedro", role: "Arquiteto" },
    ],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 2 },
      { id: "photos", label: "Fotos", count: 1 },
      { id: "files", label: "Arquivos", count: 1 },
      { id: "inspections", label: "Vistorias", count: 1 },
      { id: "comments", label: "Comentários", count: 1 },
      { id: "approvals", label: "Aprovações", count: 1 },
      { id: "alerts", label: "Alertas", count: 1 },
    ],
    feed: [
      {
        id: "f1",
        type: "progress",
        user: "Mariana Costa",
        action: "atualizou",
        target: "Estrutura - Fundação",
        badge: "AVANÇO",
        time: "agora",
        dayLabel: "HOJE",
        progress: 72,
        note: "+7 pontos · cronograma adiantado",
      },
      {
        id: "f2",
        type: "photos",
        user: "Mariana Costa",
        action: "compartilhou uma foto",
        target: "",
        badge: "FOTO",
        time: "08:12",
        caption:
          "Concretagem da laje L1 finalizada às 07:38. Cura programada para 72h.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
        footerA: "12",
        footerB: "4",
      },
      {
        id: "f3",
        type: "inspections",
        user: "Rafael Souza",
        action: "registrou vistoria",
        target: "",
        badge: "VISTORIA",
        time: "07:38",
        caption:
          "Verificação concluída no setor estrutural. Sem não conformidades críticas.",
      },
    ],
  },
  {
    id: "residencial-jardins",
    name: "Residencial Jardins",
    stage: "Acabamento",
    progress: 48,
    city: "São Paulo, SP",
    cover:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=200&q=80",
    author: "João Pedro",
    lastMessage: "João Pedro anexou Memor...",
    time: "08:42",
    unread: 3,
    live: false,
    following: true,
    updatesToday: 5,
    photosToday: 1,
    docsToday: 2,
    inspectionsToday: 0,
    team: [
      { name: "João Pedro", role: "Arquiteto" },
      { name: "Fernanda Lima", role: "Eng. Elétrica" },
    ],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 1 },
      { id: "photos", label: "Fotos", count: 1 },
      { id: "files", label: "Arquivos", count: 2 },
      { id: "inspections", label: "Vistorias", count: 0 },
      { id: "comments", label: "Comentários", count: 1 },
      { id: "approvals", label: "Aprovações", count: 0 },
      { id: "alerts", label: "Alertas", count: 0 },
    ],
    feed: [
      {
        id: "j1",
        type: "files",
        user: "João Pedro",
        action: "anexou",
        target: "Memorial descritivo",
        badge: "ARQUIVO",
        time: "08:42",
        caption: "Documento revisado e disponível para validação técnica.",
      },
    ],
  },
  {
    id: "corporate-tower",
    name: "Corporate Tower",
    stage: "Estrutura do 8º",
    progress: 25,
    city: "Curitiba, PR",
    cover:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80",
    author: "Sistema",
    lastMessage: "ALERTA: estrutura do 8º a...",
    time: "12 min",
    unread: 12,
    live: true,
    following: false,
    updatesToday: 4,
    photosToday: 0,
    docsToday: 0,
    inspectionsToday: 2,
    team: [
      { name: "Carlos Mendes", role: "Eng. Civil" },
      { name: "Mariana Costa", role: "Eng. Responsável" },
    ],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 1 },
      { id: "photos", label: "Fotos", count: 0 },
      { id: "files", label: "Arquivos", count: 0 },
      { id: "inspections", label: "Vistorias", count: 2 },
      { id: "comments", label: "Comentários", count: 0 },
      { id: "approvals", label: "Aprovações", count: 0 },
      { id: "alerts", label: "Alertas", count: 1 },
    ],
    feed: [
      {
        id: "c1",
        type: "alerts",
        user: "Sistema",
        action: "gerou um alerta",
        target: "Estrutura do 8º",
        badge: "ALERTA",
        time: "12 min",
        caption: "Alerta estrutural emitido para revisão do setor do 8º andar.",
      },
    ],
  },
  {
    id: "loft-panorama",
    name: "Loft Panorama",
    stage: "Vistoria final",
    progress: 94,
    city: "Belo Horizonte, MG",
    cover:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=200&q=80",
    author: "Rafael Souza",
    lastMessage: "Rafael Souza concluiu vist...",
    time: "Ontem",
    unread: 0,
    live: false,
    following: true,
    updatesToday: 2,
    photosToday: 1,
    docsToday: 0,
    inspectionsToday: 1,
    team: [{ name: "Rafael Souza", role: "Mestre de obras" }],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 1 },
      { id: "photos", label: "Fotos", count: 1 },
      { id: "files", label: "Arquivos", count: 0 },
      { id: "inspections", label: "Vistorias", count: 1 },
      { id: "comments", label: "Comentários", count: 0 },
      { id: "approvals", label: "Aprovações", count: 0 },
      { id: "alerts", label: "Alertas", count: 0 },
    ],
    feed: [],
  },
  {
    id: "horizonte",
    name: "Horizonte",
    stage: "Aprovação solicitada",
    progress: 61,
    city: "Campinas, SP",
    cover:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=200&q=80",
    author: "Sistema",
    lastMessage: "Aprovação solicitada: me...",
    time: "Ontem",
    unread: 1,
    live: false,
    following: false,
    updatesToday: 1,
    photosToday: 0,
    docsToday: 1,
    inspectionsToday: 0,
    team: [{ name: "Fernanda Lima", role: "Eng. Elétrica" }],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 0 },
      { id: "photos", label: "Fotos", count: 0 },
      { id: "files", label: "Arquivos", count: 1 },
      { id: "inspections", label: "Vistorias", count: 0 },
      { id: "comments", label: "Comentários", count: 0 },
      { id: "approvals", label: "Aprovações", count: 1 },
      { id: "alerts", label: "Alertas", count: 0 },
    ],
    feed: [],
  },
  {
    id: "greenview",
    name: "Est. Greenview",
    stage: "Relatório semanal",
    progress: 53,
    city: "Porto Alegre, RS",
    cover:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=200&q=80",
    author: "Sistema",
    lastMessage: "Relatório semanal publicado",
    time: "Seg",
    unread: 0,
    live: false,
    following: false,
    updatesToday: 3,
    photosToday: 0,
    docsToday: 2,
    inspectionsToday: 1,
    team: [{ name: "Carlos Mendes", role: "Eng. Civil" }],
    tabs: [
      { id: "all", label: "Tudo", count: null },
      { id: "progress", label: "Avanço", count: 1 },
      { id: "photos", label: "Fotos", count: 0 },
      { id: "files", label: "Arquivos", count: 2 },
      { id: "inspections", label: "Vistorias", count: 1 },
      { id: "comments", label: "Comentários", count: 0 },
      { id: "approvals", label: "Aprovações", count: 0 },
      { id: "alerts", label: "Alertas", count: 0 },
    ],
    feed: [],
  },
];

const leftFilters = [
  { id: "all", label: "Todas" },
  { id: "news", label: "Com novidades" },
  { id: "following", label: "Acompanhando" },
  { id: "live", label: "Ao vivo" },
];

function TimelineIcon({ type }) {
  if (type === "progress") {
    return <TrendingUp size={18} />;
  }

  if (type === "photos") {
    return <Camera size={18} />;
  }

  if (type === "files") {
    return <Folder size={18} />;
  }

  if (type === "inspections") {
    return <ClipboardCheck size={18} />;
  }

  if (type === "comments") {
    return <MessageSquareText size={18} />;
  }

  if (type === "alerts") {
    return <TriangleAlert size={18} />;
  }

  return <CheckCircle2 size={18} />;
}

function TimelinePost({ item, isFirst }) {
  return (
    <article className="updates-post">
      <div className="updates-post__rail">
        {item.dayLabel && isFirst && (
          <div className="updates-post__day">{item.dayLabel}</div>
        )}

        <div className="updates-post__icon">
          <TimelineIcon type={item.type} />
        </div>

        <div className="updates-post__line" />
      </div>

      <div className="updates-post__content">
        <div className="updates-post__header">
          <div className="updates-post__title">
            <strong>{item.user}</strong>
            <span>
              {" "}
              {item.action} {item.target && <strong>{item.target}</strong>}
            </span>
            <span className={`updates-badge updates-badge--${item.type}`}>
              {item.badge}
            </span>
          </div>

          <span className="updates-post__time">{item.time}</span>
        </div>

        {item.type === "progress" && (
          <div className="updates-progress-card">
            <div className="updates-progress-card__top">
              <strong>{item.progress}%</strong>

              <div>
                <h4>{item.target}</h4>
                <p>{item.note}</p>
              </div>
            </div>

            <div className="updates-progress-bar">
              <div style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        )}

        {item.type !== "progress" && (
          <div className="updates-post__box">
            <p>{item.caption}</p>
          </div>
        )}

        {item.image && (
          <div className="updates-photo-card">
            <img src={item.image} alt="" />

            <div className="updates-photo-card__footer">
              <span>{item.footerA}</span>
              <span>{item.footerB}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function Atualizacoes() {
  const [selectedWorkId, setSelectedWorkId] = useState("villa-aurora");
  const [activeLeftFilter, setActiveLeftFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [searchWork, setSearchWork] = useState("");
  const [searchFeed, setSearchFeed] = useState("");

  const filteredWorks = useMemo(() => {
    return works.filter((work) => {
      const matchesSearch =
        work.name.toLowerCase().includes(searchWork.toLowerCase()) ||
        work.city.toLowerCase().includes(searchWork.toLowerCase()) ||
        work.stage.toLowerCase().includes(searchWork.toLowerCase());

      const matchesFilter =
        activeLeftFilter === "all" ||
        (activeLeftFilter === "news" && work.unread > 0) ||
        (activeLeftFilter === "following" && work.following) ||
        (activeLeftFilter === "live" && work.live);

      return matchesSearch && matchesFilter;
    });
  }, [activeLeftFilter, searchWork]);

  const selectedWork =
    works.find((work) => work.id === selectedWorkId) || works[0];

  const filteredFeed = useMemo(() => {
    return selectedWork.feed.filter((item) => {
      const matchesTab = activeTab === "all" || item.type === activeTab;

      const haystack = `${item.user} ${item.action} ${item.target} ${
        item.caption || ""
      }`.toLowerCase();

      const matchesSearch = haystack.includes(searchFeed.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchFeed, selectedWork]);

  return (
    <AppShell
      activePage="atualizacoes"
      showTopbar={false}
      showPageHeader={false}
      className="updates-shell-host"
    >
      <main className="updates-page">
        <aside className="updates-sidebar">
          <div className="updates-sidebar__header">
            <div className="updates-sidebar__title">
              <h2>Atualizações</h2>
              <span className="updates-counter">24</span>
            </div>

            <button type="button" className="updates-icon-btn">
              <Plus size={18} />
            </button>
          </div>

          <label className="updates-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Buscar obra..."
              value={searchWork}
              onChange={(event) => setSearchWork(event.target.value)}
            />
          </label>

          <div className="updates-filter-group">
            {leftFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`updates-filter-chip ${
                  activeLeftFilter === filter.id ? "is-active" : ""
                }`}
                onClick={() => setActiveLeftFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="updates-sidebar__section-title">SUAS OBRAS</div>

          <div className="updates-work-list">
            {filteredWorks.map((work) => (
              <button
                key={work.id}
                type="button"
                className={`updates-work-card ${
                  selectedWork.id === work.id ? "is-active" : ""
                }`}
                onClick={() => setSelectedWorkId(work.id)}
              >
                <img src={work.thumb} alt={work.name} />

                <div className="updates-work-card__content">
                  <div className="updates-work-card__top">
                    <strong>{work.name}</strong>

                    <div className="updates-work-card__meta-right">
                      {work.live && (
                        <span className="updates-live-inline">AO VIVO</span>
                      )}
                      <span>{work.time}</span>
                    </div>
                  </div>

                  <p>{work.lastMessage}</p>
                </div>

                {work.unread > 0 && (
                  <span className="updates-notify">{work.unread}</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        <section className="updates-center">
          <div className="updates-center__top">
            <div className="updates-project-overview">
              <img src={selectedWork.thumb} alt={selectedWork.name} />

              <div>
                <h1>{selectedWork.name}</h1>
                <p>
                  <span className="updates-green-dot" />
                  {selectedWork.stage} · {selectedWork.progress}% ·{" "}
                  {selectedWork.city}
                </p>
              </div>
            </div>

            <div className="updates-center__actions">
              <button type="button" className="updates-follow-btn">
                Acompanhando
              </button>

              <button type="button" className="updates-circle-btn">
                <CalendarDays size={18} />
              </button>

              <button type="button" className="updates-circle-btn">
                <Bell size={18} />
              </button>

              <button type="button" className="updates-circle-btn">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="updates-center__search">
            <label className="updates-search updates-search--full">
              <Search size={18} />
              <input
                type="search"
                placeholder={`Buscar em ${selectedWork.name}...`}
                value={searchFeed}
                onChange={(event) => setSearchFeed(event.target.value)}
              />
            </label>
          </div>

          <div className="updates-tabs">
            {selectedWork.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`updates-tab ${
                  activeTab === tab.id ? "is-active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className="updates-tab__count">{tab.count}</span>
                )}
              </button>
            ))}
          </div>

          <div className="updates-feed">
            {filteredFeed.map((item, index) => (
              <TimelinePost
                key={item.id}
                item={item}
                isFirst={index === 0}
              />
            ))}
          </div>
        </section>

        <aside className="updates-right">
          <div className="updates-right__hero">
            <div className="updates-right__hero-image">
              <img src={selectedWork.cover} alt={selectedWork.name} />
              <span className="updates-live-badge">Ao vivo</span>
            </div>

            <div className="updates-right__hero-body">
              <h3>{selectedWork.name}</h3>
              <p>
                <MapPin size={14} />
                {selectedWork.city}
              </p>
            </div>

            <div className="updates-right__grid-actions">
              <button type="button">
                <CalendarDays size={18} />
                <span>Agenda</span>
              </button>

              <button type="button">
                <Folder size={18} />
                <span>Suprimentos</span>
              </button>

              <button type="button">
                <CheckCircle2 size={18} />
                <span>Equipe</span>
              </button>

              <button type="button">
                <Bell size={18} />
                <span>Notificar</span>
              </button>
            </div>

            <div className="updates-side-block">
              <span className="updates-side-title">STATUS ATUAL</span>

              <div className="updates-side-row">
                <span>Etapa</span>
                <strong>{selectedWork.stage}</strong>
              </div>

              <div className="updates-side-row">
                <span>Avanço</span>
                <strong>{selectedWork.progress}%</strong>
              </div>

              <div className="updates-side-progress">
                <div style={{ width: `${selectedWork.progress}%` }} />
              </div>
            </div>

            <div className="updates-side-block">
              <span className="updates-side-title">RESUMO DE HOJE</span>

              <div className="updates-side-row">
                <span>Atualizações</span>
                <strong>{selectedWork.updatesToday}</strong>
              </div>

              <div className="updates-side-row">
                <span>Fotos publicadas</span>
                <strong>{selectedWork.photosToday}</strong>
              </div>

              <div className="updates-side-row">
                <span>Documentos</span>
                <strong>{selectedWork.docsToday}</strong>
              </div>

              <div className="updates-side-row">
                <span>Vistorias</span>
                <strong>{selectedWork.inspectionsToday}</strong>
              </div>
            </div>

            <div className="updates-side-block">
              <span className="updates-side-title">EQUIPE</span>

              <div className="updates-team-list">
                {selectedWork.team.map((member, index) => (
                  <div key={member.name} className="updates-team-member">
                    <div className={`updates-team-avatar avatar-${index + 1}`}>
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </AppShell>
  );
}

export default Atualizacoes;