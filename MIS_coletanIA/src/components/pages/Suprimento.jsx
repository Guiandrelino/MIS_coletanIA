import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Filter,
  MapPin,
  Package,
  Search,
  Truck,
  User,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

import {
  supplies,
  supplyStats,
  supplyFilters,
  supplyCategories,
  supplyStatusLabels,
  supplyStatusClasses,
  supplyPriorityLabels,
  supplyPriorityClasses,
  criticalSupplyItems,
  attentionSupplyItems,
} from "../data/supplies";

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

function SupplyItem({ item }) {
  const statusClass = supplyStatusClasses[item.status] || "blue";
  const priorityClass = supplyPriorityClasses[item.priority] || "blue";

  return (
    <article className="supply-clean-item">
      <div className="supply-clean-main">
        <span className={`supply-clean-dot ${statusClass}`} />

        <div className="supply-clean-info">
          <h4>{item.name}</h4>
          <p>{item.quantity}</p>
          <span>{item.description}</span>
        </div>
      </div>

      <div className="supply-clean-actions">
        <span className={`supply-clean-pill ${statusClass}`}>
          {supplyStatusLabels[item.status]}
        </span>

        {item.status === "critical" && (
          <span className="supply-clean-warning">⚠</span>
        )}
      </div>
    </article>
  );
}

function WorkCard({ supply }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <article className="supply-clean-card">
      <header className="supply-clean-header">
        <div className="supply-clean-project">
          <img src={supply.image} alt="" />

          <div>
            <h3>{supply.project}</h3>
            <p>
              {supply.location} • {supply.summary.totalItems} itens
            </p>

            {supply.summary.criticalItems > 0 && (
              <span className="supply-clean-critical">
                {supply.summary.criticalItems} críticos
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          className="supply-clean-toggle"
          aria-label={isExpanded ? "Recolher itens" : "Expandir itens"}
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? "⌃" : "⌄"}
        </button>
      </header>

      {isExpanded && (
        <div className="supply-clean-list">
          {supply.items.map((item) => (
            <SupplyItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </article>
  );
}

function SupplySidePanel() {
  return (
    <aside className="section">
      <section className="card card--large">
        <div className="section-head">
          <div>
            <h2>Resumo crítico</h2>
            <p>Itens que podem bloquear a operação.</p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <span className="pulse" aria-hidden="true" />

          <div>
            <strong>{criticalSupplyItems.length} itens críticos</strong>
            <p className="text-muted mt-4">
              Materiais abaixo do mínimo ou sem confirmação de entrega.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-12">
          <AlertTriangle size={20} aria-hidden="true" />

          <div>
            <strong>{attentionSupplyItems.length} em atenção</strong>
            <p className="text-muted mt-4">
              Itens próximos do limite ou com previsão sensível.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Itens críticos</h2>
            <p>Prioridade de compra ou confirmação.</p>
          </div>
        </div>

        <div className="alerts mt-20">
          {criticalSupplyItems.slice(0, 5).map((item) => (
            <div key={item.id} className="file-item">
              <div className="file-icon">
                <Package size={18} aria-hidden="true" />
              </div>

              <div className="file-info">
                <strong>{item.name}</strong>
                <span>{item.project}</span>
              </div>

              <span className="file-status">{item.deliveryDate}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <h2>Categorias</h2>
            <p>Tipos de materiais monitorados.</p>
          </div>
        </div>

        <div className="flex gap-8 mt-20" style={{ flexWrap: "wrap" }}>
          {supplyCategories.map((category) => (
            <span key={category} className="status-pill blue">
              {category}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function Suprimentos() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSupplies = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();

    return supplies.filter((supply) => {
      const matchesSearch =
        supply.project.toLowerCase().includes(normalizedSearch) ||
        supply.location.toLowerCase().includes(normalizedSearch) ||
        supply.responsible.toLowerCase().includes(normalizedSearch) ||
        supply.items.some(
          (item) =>
            item.name.toLowerCase().includes(normalizedSearch) ||
            item.category.toLowerCase().includes(normalizedSearch) ||
            item.supplier.toLowerCase().includes(normalizedSearch)
        );

      const matchesFilter =
        activeFilter === "all" ||
        supply.status === activeFilter ||
        supply.items.some((item) => item.status === activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <AppShell
      activePage="suprimentos"
      title="Suprimentos"
      description="Monitore materiais, estoque mínimo, entregas, fornecedores e riscos de abastecimento por obra."
      newButtonLabel="Novo pedido"
    >
      <section className="summary-grid">
        {supplyStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="card card--compact">
        <div className="flex justify-between items-center gap-16">
          <label className="search search-input">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Buscar suprimentos</span>
            <input
              type="search"
              placeholder="Buscar por obra, material, fornecedor, categoria ou responsável..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="tabs">
            <Filter size={16} aria-hidden="true" />

            {supplyFilters.map((filter) => (
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
              <h2>Controle por obra</h2>
              <p>
                {filteredSupplies.length} obra
                {filteredSupplies.length !== 1
                  ? "s monitoradas"
                  : " monitorada"}
              </p>
            </div>
          </div>

          <div className="works-grid">
            {filteredSupplies.length > 0 ? (
              filteredSupplies.map((supply) => (
                <WorkCard key={supply.id} supply={supply} />
              ))
            ) : (
              <div className="card">
                <div className="flex items-center gap-12">
                  <CheckCircle2 size={24} aria-hidden="true" />

                  <div>
                    <strong>Nenhum suprimento encontrado</strong>
                    <p className="text-muted mt-4">
                      Ajuste os filtros ou tente buscar por outro termo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <SupplySidePanel />
      </section>
    </AppShell>
  );
}

export default Suprimentos;