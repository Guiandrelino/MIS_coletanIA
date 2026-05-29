export const supplies = [
  {
    id: "SUP-001",
    projectId: "PRJ-001",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    responsible: "Carlos Mendes",
    status: "critical",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    summary: {
      totalItems: 18,
      criticalItems: 3,
      pendingOrders: 5,
      deliveredThisWeek: 9,
    },
    items: [
      {
        id: "ITEM-001",
        name: "Cimento CP-II",
        category: "Materiais básicos",
        quantity: "120 sacos",
        minimumStock: "180 sacos",
        supplier: "Cimentos Brasil",
        status: "critical",
        priority: "high",
        deliveryDate: "Hoje",
        description:
          "Estoque abaixo do mínimo operacional. Pode impactar a etapa de concretagem prevista para os próximos dias.",
      },
      {
        id: "ITEM-002",
        name: "Vergalhão CA-50",
        category: "Estrutura",
        quantity: "2,4 toneladas",
        minimumStock: "2 toneladas",
        supplier: "Aço Forte",
        status: "ok",
        priority: "medium",
        deliveryDate: "Entregue",
        description:
          "Quantidade suficiente para a frente estrutural atual. Manter acompanhamento para próxima medição.",
      },
      {
        id: "ITEM-003",
        name: "Argamassa AC-II",
        category: "Acabamento",
        quantity: "85 sacos",
        minimumStock: "140 sacos",
        supplier: "RevestMix",
        status: "attention",
        priority: "medium",
        deliveryDate: "2 dias",
        description:
          "Consumo acima do previsto para a etapa atual. Recomenda-se revisar projeção de compra.",
      },
    ],
  },
  {
    id: "SUP-002",
    projectId: "PRJ-002",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    responsible: "Mariana Lopes",
    status: "attention",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    summary: {
      totalItems: 24,
      criticalItems: 2,
      pendingOrders: 7,
      deliveredThisWeek: 11,
    },
    items: [
      {
        id: "ITEM-004",
        name: "Porcelanato 90x90",
        category: "Acabamento",
        quantity: "1.200 m²",
        minimumStock: "1.500 m²",
        supplier: "Prime Revestimentos",
        status: "attention",
        priority: "medium",
        deliveryDate: "3 dias",
        description:
          "Entrega parcial confirmada. A quantidade atual pode limitar a execução em duas frentes de acabamento.",
      },
      {
        id: "ITEM-005",
        name: "Cabos elétricos 10mm",
        category: "Instalações",
        quantity: "680 m",
        minimumStock: "900 m",
        supplier: "EletroSul Distribuidora",
        status: "critical",
        priority: "high",
        deliveryDate: "Aguardando fornecedor",
        description:
          "Fornecedor ainda não confirmou agenda de entrega. Existe risco de atraso na etapa elétrica.",
      },
      {
        id: "ITEM-006",
        name: "Massa corrida",
        category: "Pintura",
        quantity: "320 barricas",
        minimumStock: "250 barricas",
        supplier: "Tintas Norte",
        status: "ok",
        priority: "low",
        deliveryDate: "Entregue",
        description:
          "Estoque acima do mínimo previsto para a semana. Sem necessidade de nova compra imediata.",
      },
    ],
  },
  {
    id: "SUP-003",
    projectId: "PRJ-003",
    project: "Complexo Vila Verde",
    location: "Jundiaí, SP",
    responsible: "Fernanda Rocha",
    status: "ok",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    summary: {
      totalItems: 15,
      criticalItems: 0,
      pendingOrders: 3,
      deliveredThisWeek: 6,
    },
    items: [
      {
        id: "ITEM-007",
        name: "Tubulação PVC 100mm",
        category: "Hidráulica",
        quantity: "430 m",
        minimumStock: "300 m",
        supplier: "HidroMax",
        status: "ok",
        priority: "low",
        deliveryDate: "Entregue",
        description:
          "Estoque adequado para as frentes hidráulicas planejadas para a próxima semana.",
      },
      {
        id: "ITEM-008",
        name: "Blocos cerâmicos",
        category: "Alvenaria",
        quantity: "12.000 un.",
        minimumStock: "10.000 un.",
        supplier: "Cerâmica Paulista",
        status: "ok",
        priority: "medium",
        deliveryDate: "Entregue",
        description:
          "Material disponível em quantidade suficiente para a etapa atual de alvenaria.",
      },
      {
        id: "ITEM-009",
        name: "Areia média",
        category: "Materiais básicos",
        quantity: "18 m³",
        minimumStock: "25 m³",
        supplier: "Mineradora Vale Seco",
        status: "attention",
        priority: "medium",
        deliveryDate: "Amanhã",
        description:
          "Estoque próximo do limite mínimo. Entrega prevista para amanhã deve normalizar o volume.",
      },
    ],
  },
  {
    id: "SUP-004",
    projectId: "PRJ-004",
    project: "Torre Central",
    location: "Santo André, SP",
    responsible: "Ricardo Alves",
    status: "critical",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    summary: {
      totalItems: 31,
      criticalItems: 5,
      pendingOrders: 9,
      deliveredThisWeek: 8,
    },
    items: [
      {
        id: "ITEM-010",
        name: "Drywall ST",
        category: "Vedação",
        quantity: "540 placas",
        minimumStock: "700 placas",
        supplier: "DryBuild",
        status: "critical",
        priority: "high",
        deliveryDate: "Sem confirmação",
        description:
          "Material abaixo do estoque mínimo e sem confirmação de entrega. Pode comprometer avanço de vedação interna.",
      },
      {
        id: "ITEM-011",
        name: "Perfis metálicos",
        category: "Vedação",
        quantity: "1.800 m",
        minimumStock: "2.200 m",
        supplier: "MetalForm",
        status: "attention",
        priority: "medium",
        deliveryDate: "4 dias",
        description:
          "Quantidade parcialmente suficiente. Necessário acompanhar consumo por frente.",
      },
      {
        id: "ITEM-012",
        name: "Luminárias LED",
        category: "Instalações",
        quantity: "240 un.",
        minimumStock: "300 un.",
        supplier: "LuzPro",
        status: "critical",
        priority: "high",
        deliveryDate: "Aguardando fornecedor",
        description:
          "Entrega sem confirmação. Risco para etapa de finalização de áreas comuns.",
      },
    ],
  },
  {
    id: "SUP-005",
    projectId: "PRJ-005",
    project: "Galpão Logístico Norte",
    location: "Guarulhos, SP",
    responsible: "Patrícia Gomes",
    status: "attention",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    summary: {
      totalItems: 20,
      criticalItems: 1,
      pendingOrders: 4,
      deliveredThisWeek: 10,
    },
    items: [
      {
        id: "ITEM-013",
        name: "Estrutura metálica",
        category: "Estrutura",
        quantity: "32 toneladas",
        minimumStock: "35 toneladas",
        supplier: "Metal Norte",
        status: "attention",
        priority: "high",
        deliveryDate: "2 dias",
        description:
          "Entrega complementar programada. Acompanhar descarga para evitar impacto na montagem.",
      },
      {
        id: "ITEM-014",
        name: "Piso industrial",
        category: "Pavimentação",
        quantity: "2.400 m²",
        minimumStock: "2.000 m²",
        supplier: "PisoTech",
        status: "ok",
        priority: "medium",
        deliveryDate: "Entregue",
        description:
          "Material disponível conforme planejamento da etapa de piso de alta resistência.",
      },
      {
        id: "ITEM-015",
        name: "Tela soldada",
        category: "Estrutura",
        quantity: "180 painéis",
        minimumStock: "260 painéis",
        supplier: "Aço Forte",
        status: "critical",
        priority: "high",
        deliveryDate: "Aguardando fornecedor",
        description:
          "Quantidade insuficiente para continuidade da concretagem do piso industrial.",
      },
    ],
  },
];

export const supplyStatusLabels = {
  ok: "Normal",
  attention: "Atenção",
  critical: "Crítico",
};

export const supplyStatusClasses = {
  ok: "green",
  attention: "orange",
  critical: "red",
};

export const supplyPriorityLabels = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
};

export const supplyPriorityClasses = {
  low: "blue",
  medium: "orange",
  high: "red",
};

export const supplyCategories = [
  "Materiais básicos",
  "Estrutura",
  "Acabamento",
  "Instalações",
  "Hidráulica",
  "Alvenaria",
  "Pintura",
  "Vedação",
  "Pavimentação",
];

export const supplyFilters = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "critical",
    label: "Críticos",
  },
  {
    id: "attention",
    label: "Atenção",
  },
  {
    id: "ok",
    label: "Normal",
  },
];

export const supplyStats = [
  {
    id: "total-projects",
    label: "Obras monitoradas",
    value: supplies.length,
    variation: "Carteira ativa",
    tone: "info",
  },
  {
    id: "total-items",
    label: "Itens monitorados",
    value: supplies.reduce(
      (acc, supply) => acc + supply.summary.totalItems,
      0
    ),
    variation: "Todos os projetos",
    tone: "success",
  },
  {
    id: "critical-items",
    label: "Itens críticos",
    value: supplies.reduce(
      (acc, supply) => acc + supply.summary.criticalItems,
      0
    ),
    variation: "Exigem ação",
    tone: "danger",
  },
  {
    id: "pending-orders",
    label: "Pedidos pendentes",
    value: supplies.reduce(
      (acc, supply) => acc + supply.summary.pendingOrders,
      0
    ),
    variation: "Aguardando retorno",
    tone: "warning",
  },
];

export const criticalSupplyItems = supplies.flatMap((supply) =>
  supply.items
    .filter((item) => item.status === "critical")
    .map((item) => ({
      ...item,
      project: supply.project,
      location: supply.location,
      responsible: supply.responsible,
    }))
);

export const attentionSupplyItems = supplies.flatMap((supply) =>
  supply.items
    .filter((item) => item.status === "attention")
    .map((item) => ({
      ...item,
      project: supply.project,
      location: supply.location,
      responsible: supply.responsible,
    }))
);