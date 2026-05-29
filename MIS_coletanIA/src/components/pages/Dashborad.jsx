import { AppShell } from "../layout/AppShell";

const phases = [
  { name: "Fundação", value: 100, color: "green" },
  { name: "Estrutura", value: 95, color: "green" },
  { name: "Vedações", value: 82, color: "blue" },
  { name: "Hidráulica", value: 68, color: "blue" },
  { name: "Elétrica", value: 55, color: "amber" },
  { name: "Revestimento", value: 40, color: "amber" },
  { name: "Acabamento", value: 12, color: "red" },
];

const alerts = [
  {
    id: 1,
    tone: "red",
    icon: "🔴",
    title: "Atraso: Sala Técnica",
    description: "Instalações elétricas — desvio de 5 dias",
    time: "09:12",
  },
  {
    id: 2,
    tone: "amber",
    icon: "🟡",
    title: "Pendência: Revestimento",
    description: "Materiais aguardando entrega",
    time: "08:30",
  },
  {
    id: 3,
    tone: "amber",
    icon: "🟡",
    title: "Validação IA pendente",
    description: "Relatório semanal aguarda revisão",
    time: "08:05",
  },
  {
    id: 4,
    tone: "green",
    icon: "✅",
    title: "Estrutura Torre B concluída",
    description: "Validado pelo engenheiro RS",
    time: "ontem",
    muted: true,
  },
];

const weekProgress = [58, 62, 68, 65, 70, 74, 78];
const iaSpark = [6.5, 7, 7.4, 7.9, 8.2, 8.5, 8.7];

const otherProjects = [
  { id: "op-1", name: "Residencial Aurora", location: "Campinas, SP", progress: 45, color: "blue" },
  { id: "op-2", name: "Torre Central", location: "São Paulo, SP", progress: 62, color: "blue" },
  { id: "op-3", name: "Edifício Horizonte", location: "São Paulo, SP", progress: 88, color: "green" },
  { id: "op-4", name: "Vila Verde", location: "Curitiba, PR", progress: 22, color: "amber" },
  { id: "op-5", name: "Condomínio Mar Azul", location: "Santos, SP", progress: 34, color: "amber" },
];

function TopSummary() {
  return (
    <section className="construct-card construct-hero">
      <div className="construct-hero__main">
        <div className="construct-hero__marker" />

        <div>
          <h1>Edifício Nórdica</h1>
          <p>
            Av. Brig. Faria Lima, 3477 · São Paulo · Torre A + Torre B · 12
            pavimentos
          </p>

          <div className="construct-hero__stats">
            <div>
              <strong className="is-blue">78%</strong>
              <span>Conclusão</span>
            </div>

            <div>
              <strong>28 d</strong>
              <span>Restantes</span>
            </div>

            <div>
              <strong className="is-amber">3</strong>
              <span>Alertas</span>
            </div>

            <div>
              <strong className="is-green">9</strong>
              <span>Equipe</span>
            </div>

            <div>
              <strong>930 m²</strong>
              <span>Área total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeekCard() {
  return (
    <article className="construct-card construct-week">
      <div className="construct-card__head">
        <span>Progresso Semanal</span>
        <small>Mai 2025</small>
      </div>

      <div className="construct-week__bars">
        {weekProgress.map((value, index) => (
          <div
            key={index}
            className={index === weekProgress.length - 1 ? "is-active" : ""}
            style={{ height: `${(value / 78) * 100}%` }}
          />
        ))}
      </div>

      <div className="construct-week__labels">
        <span>S2</span>
        <span>S3</span>
        <span>S4</span>
        <span>Hoje</span>
      </div>
    </article>
  );
}

function SafetyCard() {
  return (
    <article className="construct-card construct-safety">
      <span>Dias sem acidentes</span>
      <strong className="text-green">47</strong>
      <small>consecutivos</small>
      <div className="kpi-deco green" />
    </article>
  );
}

function BlueprintCard() {
  return (
    <section className="construct-plan">
      <div className="construct-plan__tag">
        <span />
        Planta Baixa · Pavimento 1 · Torre A
      </div>

      <div className="construct-plan__svg">
        <svg
          viewBox="0 0 760 420"
          width="88%"
          height="88%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a4a8a" stopOpacity=".55" />
              <stop offset="100%" stopColor="#2a7bc8" stopOpacity=".35" />
            </linearGradient>

            <linearGradient id="fillBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8f4ff" stopOpacity=".9" />
              <stop offset="100%" stopColor="#d0e8fa" stopOpacity=".7" />
            </linearGradient>

            <linearGradient id="fillAmber" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff3e0" stopOpacity=".9" />
              <stop offset="100%" stopColor="#ffe0b2" stopOpacity=".6" />
            </linearGradient>

            <linearGradient id="fillCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e0f7fa" stopOpacity=".9" />
              <stop offset="100%" stopColor="#b2ebf2" stopOpacity=".6" />
            </linearGradient>

            <linearGradient id="fillRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde0e5" stopOpacity=".9" />
              <stop offset="100%" stopColor="#ffcdd2" stopOpacity=".6" />
            </linearGradient>

            <linearGradient id="fillGreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8f5e9" stopOpacity=".9" />
              <stop offset="100%" stopColor="#c8e6c9" stopOpacity=".6" />
            </linearGradient>
          </defs>

          <rect x="42" y="32" width="180" height="172" rx="3" fill="url(#fillGreen)" />
          <rect x="222" y="32" width="190" height="172" rx="3" fill="url(#fillAmber)" />
          <rect x="412" y="32" width="152" height="172" rx="3" fill="url(#fillBlue)" />
          <rect x="564" y="32" width="148" height="172" rx="3" fill="url(#fillRed)" />
          <rect x="42" y="204" width="180" height="176" rx="3" fill="url(#fillBlue)" />
          <rect x="222" y="204" width="190" height="176" rx="3" fill="url(#fillCyan)" />
          <rect x="412" y="204" width="300" height="176" rx="3" fill="url(#fillBlue)" />

          <rect
            x="42"
            y="32"
            width="670"
            height="348"
            rx="4"
            stroke="url(#wallGrad)"
            strokeWidth="2.5"
          />

          <line x1="222" y1="32" x2="222" y2="204" stroke="url(#wallGrad)" strokeWidth="2" />
          <line x1="412" y1="32" x2="412" y2="380" stroke="url(#wallGrad)" strokeWidth="2" />
          <line x1="564" y1="32" x2="564" y2="204" stroke="url(#wallGrad)" strokeWidth="2" />
          <line x1="42" y1="204" x2="412" y2="204" stroke="url(#wallGrad)" strokeWidth="2" />

          <rect x="72" y="30" width="54" height="4" rx="2" fill="#2a7bc8" opacity=".55" />
          <rect x="262" y="30" width="54" height="4" rx="2" fill="#2a7bc8" opacity=".55" />
          <rect x="444" y="30" width="46" height="4" rx="2" fill="#2a7bc8" opacity=".55" />
          <rect x="596" y="30" width="46" height="4" rx="2" fill="#2a7bc8" opacity=".55" />

          <rect
            x="56"
            y="50"
            width="60"
            height="40"
            rx="4"
            stroke="rgba(74,140,200,.3)"
            fill="rgba(180,210,240,.15)"
          />

          <rect
            x="252"
            y="60"
            width="70"
            height="50"
            rx="4"
            stroke="rgba(200,140,60,.3)"
            fill="rgba(255,200,120,.1)"
          />

          <rect
            x="424"
            y="52"
            width="80"
            height="50"
            rx="4"
            stroke="rgba(26,90,255,.25)"
            fill="rgba(180,210,255,.1)"
          />

          <rect
            x="580"
            y="50"
            width="100"
            height="60"
            rx="4"
            stroke="rgba(229,57,53,.25)"
            fill="rgba(255,180,180,.1)"
          />

          <text x="132" y="200" fill="rgba(60,100,150,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            SALA PRINCIPAL
          </text>
          <text x="317" y="188" fill="rgba(160,100,30,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            RECEPÇÃO
          </text>
          <text x="488" y="192" fill="rgba(26,90,200,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            ESCRITÓRIO
          </text>
          <text x="638" y="192" fill="rgba(180,40,40,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            SALA TÉC.
          </text>
          <text x="132" y="360" fill="rgba(60,100,150,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            DEPÓSITO
          </text>
          <text x="317" y="360" fill="rgba(0,120,120,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            COPA / WC
          </text>
          <text x="560" y="360" fill="rgba(60,100,150,.55)" fontSize="8" fontFamily="monospace" textAnchor="middle">
            HALL TÉCNICO
          </text>
        </svg>
      </div>

      <Annotation className="ann-1" color="green" label="Sala Principal" value="100%" sub="Estrutura concluída ✓" />
      <Annotation className="ann-2" color="amber" label="Recepção" value="64%" sub="Revestimento pendente" />
      <Annotation className="ann-3" color="red" label="Sala Técnica" value="31%" sub="⚠ Atraso 5 dias" />
      <Annotation className="ann-4" color="blue" label="Depósito" value="88%" sub="Instalações OK" />
      <Annotation className="ann-5" color="cyan" label="Copa / WC" value="76%" sub="Hidráulica em andamento" />

      <div className="construct-ann construct-ann--center">
        <span>Área Total</span>
        <strong>930 m²</strong>
        <small>Pavto 1 · Torre A</small>
      </div>

      <div className="construct-plan__controls">
        <button type="button">＋</button>
        <button type="button">－</button>
        <button type="button">3D</button>
        <button type="button">⛶</button>
      </div>
    </section>
  );
}

function Annotation({ className, color, label, value, sub }) {
  return (
    <div className={`construct-ann ${className}`}>
      <span>
        <i className={`dot-${color}`} />
        {label}
      </span>
      <strong className={`text-${color}`}>{value}</strong>
      <small>{sub}</small>
    </div>
  );
}

function OutrasObrasCard() {
  return (
    <section className="construct-card construct-bottom-card">
      <div className="construct-card__head">
        <span>Outras Obras</span>
        <small>{otherProjects.length} projetos ativos</small>
      </div>

      <div className="construct-works-list">
        {otherProjects.map((project) => (
          <div key={project.id} className="construct-work-row">
            <div className="construct-work-row__info">
              <strong>{project.name}</strong>
              <span>{project.location}</span>
            </div>

            <div className="construct-work-row__bar">
              <div style={{ width: `${project.progress}%` }} className={`fill-${project.color}`} />
            </div>

            <strong className={`text-${project.color}`}>{project.progress}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function RightKpis() {
  return (
    <aside className="construct-right">
      <article className="construct-card construct-kpi-budget">
        <div className="construct-kpi-header">
          <span>Budget</span>
          <small className="pill-green">↑ 3%</small>
        </div>

        <strong className="text-blue">R$ 4,2M</strong>

        <div className="construct-budget-bar">
          <div className="construct-budget-bar__fill" style={{ width: "79%" }} />
        </div>

        <div className="construct-budget-details">
          <div>
            <small>Consumido</small>
            <strong className="text-blue">R$ 3,3M</strong>
          </div>
          <div>
            <small>Restante</small>
            <strong>R$ 0,9M</strong>
          </div>
          <div>
            <small>Uso</small>
            <strong>79%</strong>
          </div>
        </div>

        <div className="kpi-deco blue" />
      </article>

      <article className="construct-card construct-kpi-deadline">
        <div className="construct-kpi-header">
          <span>Dias Restantes</span>
          <small className="pill-amber">⚠ Atraso</small>
        </div>

        <strong className="text-amber">28d</strong>

        <div className="construct-deadline-grid">
          <div>
            <small>Entrega prevista</small>
            <strong>15 Jul 2025</strong>
          </div>
          <div>
            <small>Data original</small>
            <strong>08 Jul 2025</strong>
          </div>
          <div>
            <small>Atraso atual</small>
            <strong className="text-amber">+7 dias</strong>
          </div>
          <div>
            <small>Concluído</small>
            <strong>78%</strong>
          </div>
        </div>

        <div className="kpi-deco amber" />
      </article>

      <article className="construct-card construct-ia">
        <div className="construct-card__head">
          <span>Score IA</span>
          <small>Atualizado 09h47</small>
        </div>

        <div className="construct-ia__top">
          <strong>8.7</strong>
          <div>
            <span>● Excelente</span>
            <small>Saúde da obra</small>
          </div>

          <div className="construct-spark">
            {iaSpark.map((value, index) => (
              <div
                key={index}
                className={index === iaSpark.length - 1 ? "is-active" : ""}
                style={{ height: `${(value / 10) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="construct-ia__grid">
          <MiniScore label="Cronograma" value="9.2" color="green" />
          <MiniScore label="Orçamento" value="8.8" color="blue" />
          <MiniScore label="Qualidade" value="7.9" color="amber" />
          <MiniScore label="Segurança" value="9.5" color="green" />
        </div>
      </article>

      <AlertsPanel />
    </aside>
  );
}

function MiniScore({ label, value, color }) {
  return (
    <div className="construct-mini-score">
      <span>{label}</span>
      <strong className={`text-${color}`}>{value}</strong>
    </div>
  );
}

function AlertsPanel() {
  return (
    <section className="construct-card construct-bottom-card">
      <div className="construct-card__head">
        <span>Alertas</span>
        <small className="pill-amber">3 pendentes</small>
      </div>

      <div className="construct-alert-list">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className={`construct-alert ${alert.muted ? "is-muted" : ""}`}
          >
            <div className={`construct-alert__icon ${alert.tone}`}>
              {alert.icon}
            </div>

            <div>
              <strong>{alert.title}</strong>
              <span>{alert.description}</span>
            </div>

            <small>{alert.time}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function PhasesPanel() {
  return (
    <section className="construct-card construct-bottom-card">
      <div className="construct-card__head">
        <span>Fases da Obra</span>
        <small>Nórdica</small>
      </div>

      <div className="construct-phase-list">
        {phases.map((phase) => (
          <div key={phase.name} className="construct-phase">
            <span>{phase.name}</span>

            <div>
              <i
                className={`fill-${phase.color}`}
                style={{ width: `${phase.value}%` }}
              />
            </div>

            <strong className={`text-${phase.color}`}>{phase.value}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Dashboard() {
  return (
    <AppShell
      activePage="dashboard"
      title=""
      description=""
      showPageHeader={false}
      newButtonLabel="Novo registro"
      className="construct-dashboard-host"
    >
      <main className="construct-dashboard">
        <section className="construct-main-grid">
          <div className="construct-center">
            <div className="construct-top-row">
              <TopSummary />
              <WeekCard />
              <SafetyCard />
            </div>

            <BlueprintCard />

            <div className="construct-bottom-grid">
              <OutrasObrasCard />
              <PhasesPanel />
            </div>
          </div>

          <RightKpis />
        </section>
      </main>
    </AppShell>
  );
}

export default Dashboard;