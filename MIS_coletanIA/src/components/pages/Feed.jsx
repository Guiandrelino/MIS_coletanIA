import {
  Grid2X2,
  Heart,
  List,
  MessageCircle,
  Plus,
  Send,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

const storyImages = [
  {
    id: 1,
    name: "Sua obra",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    own: true,
  },
  {
    id: 2,
    name: "Jardins",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Corporate",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Villa Aurora",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Loft Panorama",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Est. Greenview",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Horizonte",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Aharada",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
  },
];

const feedCards = [
  {
    id: 1,
    project: "Villa Aurora",
    location: "Florianópolis, SC",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1000&q=80",
    status: "Em andamento",
    statusTone: "green",
    title: "Estrutura - Fundação",
    progress: 72,
    color: "#18a46a",
    manager: "Mariana Costa",
    role: "Engenheira Responsável",
    managerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    time: "Hoje, 08:42",
    likes: 128,
    comments: 32,
  },
  {
    id: 2,
    project: "Residencial Jardins",
    location: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
    status: "Acabamento",
    statusTone: "blue",
    title: "Acabamento - Revestimentos",
    progress: 48,
    color: "#2967e9",
    manager: "João Pedro",
    role: "Arquiteto",
    managerImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    time: "Ontem, 17:30",
    likes: 96,
    comments: 28,
  },
  {
    id: 3,
    project: "Corporate Tower",
    location: "Curitiba, PR",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    status: "Instalações",
    statusTone: "purple",
    title: "Instalações elétricas",
    progress: 25,
    color: "#7c4dff",
    manager: "Fernanda Lima",
    role: "Engenheira Elétrica",
    managerImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    time: "Ontem, 11:15",
    likes: 74,
    comments: 11,
  },
];

function FeedStories() {
  return (
    <section className="feed-stories">
      <div className="feed-stories__header">
        <h2>Stories de obras</h2>
        <button type="button">Ver todos</button>
      </div>

      <div className="feed-stories__row">
        {storyImages.map((story) => (
          <article key={story.id} className="feed-story">
            <div className="feed-story__avatar">
              <img src={story.image} alt={story.name} />

              {story.own && <span className="feed-story__plus">+</span>}
              {story.own && <span className="feed-story__check">✓</span>}
            </div>

            <span>{story.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeedControls() {
  return (
    <section className="feed-controls">
      <div className="feed-tabs">
        <button type="button" className="active">
          Todos
        </button>

        <button type="button">Seguindo</button>

        <button type="button">Em andamento</button>

        <button type="button">Concluídos</button>
      </div>

      <div className="feed-actions">
        <button type="button" className="feed-sort">
          Mais recentes⌄
        </button>

        <div className="feed-view-toggle">
          <button
            type="button"
            className="feed-view-btn active"
            aria-label="Visualizar em grade"
          >
            <Grid2X2 size={18} />
          </button>

          <button
            type="button"
            className="feed-view-btn"
            aria-label="Visualizar em lista"
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item }) {
  return (
    <article className="feed-work-card">
      <header className="feed-card-head">
        <div className="feed-author">
          <img src={item.image} alt="" />

          <div>
            <strong>{item.project}</strong>
            <span>{item.location}</span>
          </div>
        </div>

        <button type="button" className="feed-more" aria-label="Mais opções">
          ...
        </button>
      </header>

      <div className="feed-card-image">
        <img src={item.image} alt={item.project} />

        <span className={`feed-status ${item.statusTone}`}>{item.status}</span>
      </div>

      <section className="feed-progress-panel">
        <div className="feed-progress-row">
          <div
            className="feed-ring"
            style={{
              "--progress": item.progress,
              "--ring-color": item.color,
            }}
          >
            <span>{item.progress}%</span>
          </div>

          <div className="feed-progress-content">
            <h3>{item.title}</h3>
            <p>{item.progress}% concluído</p>

            <div
              className="feed-line-progress"
              style={{ "--ring-color": item.color }}
            >
              <div style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      <footer className="feed-card-footer">
        <div className="feed-manager">
          <img src={item.managerImage} alt={item.manager} />

          <div>
            <strong>{item.manager}</strong>
            <span>{item.role}</span>
          </div>
        </div>

        <span className="feed-date">{item.time}</span>
      </footer>

      <div className="feed-social">
        <button type="button" className="add" aria-label="Adicionar">
          <Plus size={18} />
        </button>

        <button type="button" className="heart" aria-label="Curtir">
          <Heart size={18} fill="currentColor" />
          {item.likes}
        </button>

        <button type="button" aria-label="Comentários">
          <MessageCircle size={18} />
          {item.comments}
        </button>

        <button type="button" aria-label="Enviar">
          <Send size={18} />
        </button>
      </div>
    </article>
  );
}

export function Feed() {
  return (
    <AppShell
      activePage="feed"
      title=""
      description=""
      newButtonLabel="Novo projeto"
    >
      <main className="mis-feed">
        <FeedStories />

        <FeedControls />

        <section className="feed-card-grid">
          {feedCards.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </section>
      </main>
    </AppShell>
  );
}

export default Feed;