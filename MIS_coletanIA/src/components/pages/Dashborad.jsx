import { AppShell } from "../layout/AppShell";

function ProgressRing({ value = 72, trend = "↓ 2.4%" }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="dls-progress-block">
      <span className="dls-eyebrow">Progresso Total</span>

      <div className="dls-ring-wrap">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(4,102,200,.14)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#0466c8"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>

        <div className="dls-ring-inner">
          <span className="dls-ring-pct">
            {value}
            <sup>%</sup>
          </span>
          <span className="dls-ring-trend">{trend}</span>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const bars = [32, 48, 58, 72, 84, 68];
  const labels = ["Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  return (
    <div className="dls-mini-chart">
      <div className="dls-bars">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`dls-bar ${index === 3 || index === 4 ? "active" : ""}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="dls-bar-labels">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

function LeftDashboardPanel() {
  const trades = [
    { name: "BLD 02", pct: 70, color: "#0466c8" },
    { name: "BLD Ev", pct: 45, color: "#fbbf24" },
    { name: "BLZ", pct: 85, color: "#0466c8" },
    { name: "BLD Cx", pct: 28, color: "#a1a1aa" },
  ];

  return (
    <aside className="dl-sidebar">
      <ProgressRing value={72} trend="↓ 2.4%" />

      <MiniChart />

      <div className="dls-date-block">
        <span className="dls-date-label">Previsão de Entrega</span>
        <span className="dls-date-val">3 Out 2025</span>
      </div>

      <div className="dls-alerts">
        <div className="dls-alert-item">
          <span>Semanas restantes</span>
          <strong>12</strong>
          <span>→</span>
        </div>

        <div className="dls-alert-item warn">
          <span>Alto risco</span>
          <strong>07</strong>
          <span>→</span>
        </div>
      </div>

      <div className="dls-section-hdr">
        <span className="dls-eyebrow">Progresso por Setor</span>
        <button type="button" className="dls-pill-btn">
          Todos ∨
        </button>
      </div>

      <div className="dls-trades">
        {trades.map((trade) => (
          <div key={trade.name} className="dls-trade-item">
            <div className="dls-trade-row">
              <span
                className="dls-trade-dot"
                style={{ background: trade.color }}
              />
              <span className="dls-trade-name">{trade.name}</span>
              <span className="dls-trade-pct">{trade.pct}%</span>
            </div>

            <div className="dls-tbar">
              <div
                style={{
                  width: `${trade.pct}%`,
                  background: trade.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function ConstructionHero() {
  return (
    <div className="dlc-hero">
      <div className="dlc-scene">
        <div className="dlc-sky" />
        <div className="dlc-grid-overlay" />

        <div className="dlc-building-wrap">
          <div className="dlc-building">
            <div
              className="dlc-floor"
              style={{ bottom: 0, width: 270, height: 30, opacity: 1 }}
            />
            <div
              className="dlc-floor"
              style={{ bottom: 30, width: 252, height: 30, opacity: 1 }}
            />
            <div
              className="dlc-floor"
              style={{ bottom: 60, width: 234, height: 30, opacity: 0.9 }}
            />
            <div
              className="dlc-floor"
              style={{
                bottom: 90,
                width: 216,
                height: 30,
                opacity: 0.65,
                borderStyle: "dashed",
              }}
            />
            <div
              className="dlc-floor"
              style={{
                bottom: 120,
                width: 198,
                height: 30,
                opacity: 0.35,
                borderStyle: "dashed",
              }}
            />

            <div className="dlc-scaffold left" />
            <div className="dlc-scaffold right" />
            <div className="dlc-crane" />
          </div>
        </div>

        <div className="dlc-ground" />
        <div className="dlc-overlay" />
      </div>

      <div className="dlc-hero-content">
        <div className="dlc-hero-left">
          <h1 className="dlc-hero-title">
            Gestão de Obras
            <br />
            Inteligente
          </h1>
          <p className="dlc-hero-sub">
            Plataforma MIS analisa dados em tempo real para melhorar eficiência,
            segurança e cumprimento de prazos.
          </p>
        </div>

        <div className="dlc-hero-right">
          <div className="dlc-project-chip">
            <div className="dlc-project-name">Edifício Korunastu</div>
            <div className="dlc-project-date">27 Abr 2025 · 10:14AM</div>
          </div>

          <div className="dlc-ring-badge">
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="rgba(255,255,255,.08)"
                stroke="rgba(255,255,255,.18)"
                strokeWidth="5"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="none"
                stroke="#0466c8"
                strokeWidth="5"
                strokeDasharray="201.1"
                strokeDashoffset="146.8"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <span className="dlc-ring-num">27%</span>
          </div>

          <div className="dlc-team-row">
            <div className="dlc-av" style={{ background: "#0466c8" }}>
              JS
            </div>
            <div className="dlc-av" style={{ background: "#7c3aed" }}>
              MC
            </div>
            <div className="dlc-av" style={{ background: "#059669" }}>
              RA
            </div>
            <div className="dlc-av" style={{ background: "#374151" }}>
              +3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeeklyChart() {
  const bars = [
    30, 44, 37, 52, 40, 58, 48, 34, 74, 90, 100, 84, 92, 68, 38, 26, 34, 22,
    40, 30,
  ];

  return (
    <div className="dlc-chart-card">
      <div className="dlc-chart-hdr">
        <div>
          <span className="dlc-chart-eyebrow">Progresso Semanal (m²)</span>
          <div className="dlc-chart-metric">
            <span className="dlc-chart-big">96.5%</span>
            <span className="dlc-delta up">+2.4% ▲</span>
          </div>
        </div>

        <button type="button" className="dlc-icon-btn">
          ↗
        </button>
      </div>

      <div className="dlc-bars">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`dlc-b ${index >= 8 && index <= 13 ? "active" : ""}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="dlc-range-wrap">
        <div className="dlc-range-track">
          <div className="dlc-range-fill" />
        </div>

        <div className="dlc-range-nums">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
            <span key={num}>{num}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScheduleStrip() {
  const cells = [
    { label: "-20h", type: "neg" },
    { label: "-10h", type: "neg" },
    { label: "-9.75h", type: "neg" },
    { label: "-4.87h", type: "neg" },
    { label: "0.0h", type: "zero" },
    { label: "0.0h" },
    { label: "14h", type: "pos" },
    { label: "28h", type: "pos" },
    { label: "4ft", type: "pos" },
    { label: "55h", type: "pos" },
  ];

  return (
    <div className="dlc-schedule">
      <div className="dlc-sch-hdr">
        <div className="dlc-sch-title">Cronograma de Corte e Aterro</div>
        <span className="dlc-sch-date">23 Abr 2025 · 10:14AM</span>
        <button type="button" className="dlc-icon-btn-sm">
          ∨
        </button>
      </div>

      <div className="dlc-sch-cells">
        {cells.map((cell, index) => (
          <div key={index} className={`dlc-cell ${cell.type || ""}`}>
            {cell.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function CenterDashboardPanel() {
  return (
    <main className="dl-center">
      <ConstructionHero />
      <WeeklyChart />
      <ScheduleStrip />
    </main>
  );
}

function KpiCard({ label, value, delta, tone = "orange", warn = false }) {
  return (
    <div className={`dlr-kpi ${warn ? "warn" : ""}`}>
      <div className="dlr-kpi-top">
        <div className={`dlr-kpi-icon ${tone}`}>✓</div>
        <span className="dlr-kpi-label">{label}</span>
        <button type="button" className="dlr-expand">
          ↗
        </button>
      </div>

      <span className={`dlc-delta ${warn ? "down" : "up"}`}>{delta}</span>

      <div className="dlr-gauge">
        <svg viewBox="0 0 80 80" width="80" height="80">
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke="rgba(4,102,200,.12)"
            strokeWidth="7"
          />
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke={warn ? "#dc2626" : "#0466c8"}
            strokeWidth="7"
            strokeDasharray="188.5"
            strokeDashoffset={warn ? "72" : "6.6"}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>

        <span className={`dlr-gauge-val ${tone}`}>{value}</span>
      </div>
    </div>
  );
}

function RightDashboardPanel() {
  return (
    <aside className="dl-right">
      <div className="dlr-hdr">
        <span className="dlr-title">Visão Geral</span>

        <button type="button" className="dlr-filter">
          Geral ∨
        </button>

        <button type="button" className="dlc-icon-btn">
          ⋮
        </button>
      </div>

      <KpiCard label="Concluído" value="96.5%" delta="+2.4% ▲" />
      <KpiCard
        label="Em Andamento"
        value="62%"
        delta="-1.8% ▼"
        tone="red"
        warn
      />

      <div className="dlr-summary">
        <div>
          <span>Obras ativas</span>
          <strong>05</strong>
        </div>

        <div>
          <span>Equipes</span>
          <strong>18</strong>
        </div>

        <div>
          <span>Pendências</span>
          <strong>24</strong>
        </div>
      </div>

      <div className="dlr-list">
        <div className="dlr-list-title">Próximas ações</div>

        <div className="dlr-list-item">
          <span>Revisar cronograma executivo</span>
          <strong>Hoje</strong>
        </div>

        <div className="dlr-list-item">
          <span>Validar entrega de concreto</span>
          <strong>2h</strong>
        </div>

        <div className="dlr-list-item">
          <span>Atualizar relatório fotográfico</span>
          <strong>Amanhã</strong>
        </div>
      </div>
    </aside>
  );
}

export function Dashboard() {
  return (
    <AppShell
      activePage="dashboard"
      title="Dashboard"
      description="Visão executiva da obra, progresso, riscos, cronograma e indicadores operacionais."
      newButtonLabel="Novo registro"
      fixedHeight
    >
      <section className="mis-dashboard">
        <div className="dash-layout">
          <LeftDashboardPanel />
          <CenterDashboardPanel />
          <RightDashboardPanel />
        </div>
      </section>
    </AppShell>
  );
}

export default Dashboard;