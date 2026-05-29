export const projects = [
  {
    id: "PRJ-001",
    name: "Residencial Aurora",
    description:
      "Obra residencial de médio porte com foco em execução estrutural, acabamento e controle físico-financeiro.",
    client: "Construtora Aurora",
    location: "Campinas, SP",
    type: "Residencial",
    status: "in_progress",
    priority: "high",
    progress: 68,
    budget: "R$ 4.850.000",
    spent: "R$ 3.120.000",
    deadline: "15/08/2026",
    manager: "Carlos Mendes",
    teamSize: 42,
    pendingItems: 7,
    alerts: 3,
    lastUpdate: "Hoje, 09:20",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PRJ-002",
    name: "Edifício Horizonte",
    description:
      "Empreendimento vertical em fase de acabamento, com atenção especial a suprimentos, instalações e compatibilização.",
    client: "Horizonte Engenharia",
    location: "São Paulo, SP",
    type: "Comercial",
    status: "in_progress",
    priority: "medium",
    progress: 74,
    budget: "R$ 8.200.000",
    spent: "R$ 5.980.000",
    deadline: "30/09/2026",
    manager: "Mariana Lopes",
    teamSize: 58,
    pendingItems: 11,
    alerts: 4,
    lastUpdate: "Hoje, 10:45",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PRJ-003",
    name: "Complexo Vila Verde",
    description:
      "Projeto misto com unidades residenciais, áreas comuns e infraestrutura de lazer em fase de planejamento executivo.",
    client: "Vila Verde SPE",
    location: "Jundiaí, SP",
    type: "Misto",
    status: "planning",
    priority: "medium",
    progress: 32,
    budget: "R$ 12.400.000",
    spent: "R$ 2.150.000",
    deadline: "20/12/2026",
    manager: "Fernanda Rocha",
    teamSize: 26,
    pendingItems: 14,
    alerts: 2,
    lastUpdate: "Ontem, 17:10",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PRJ-004",
    name: "Torre Central",
    description:
      "Obra corporativa com alto grau de complexidade técnica, múltiplas frentes simultâneas e cronograma sensível.",
    client: "Central Offices",
    location: "Santo André, SP",
    type: "Corporativo",
    status: "attention",
    priority: "critical",
    progress: 51,
    budget: "R$ 15.700.000",
    spent: "R$ 8.920.000",
    deadline: "05/11/2026",
    manager: "Ricardo Alves",
    teamSize: 73,
    pendingItems: 19,
    alerts: 6,
    lastUpdate: "Hoje, 08:35",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PRJ-005",
    name: "Galpão Logístico Norte",
    description:
      "Construção industrial com foco em estrutura metálica, piso de alta resistência e operação logística.",
    client: "Norte Logística",
    location: "Guarulhos, SP",
    type: "Industrial",
    status: "in_progress",
    priority: "high",
    progress: 59,
    budget: "R$ 6.900.000",
    spent: "R$ 3.870.000",
    deadline: "18/10/2026",
    manager: "Patrícia Gomes",
    teamSize: 39,
    pendingItems: 8,
    alerts: 3,
    lastUpdate: "Hoje, 11:05",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PRJ-006",
    name: "Hospital São Lucas",
    description:
      "Ampliação hospitalar com exigência elevada de documentação, controle técnico e gestão de interferências.",
    client: "Rede São Lucas",
    location: "Sorocaba, SP",
    type: "Saúde",
    status: "delayed",
    priority: "critical",
    progress: 46,
    budget: "R$ 21.300.000",
    spent: "R$ 10.480.000",
    deadline: "28/02/2027",
    manager: "João Ferreira",
    teamSize: 81,
    pendingItems: 23,
    alerts: 8,
    lastUpdate: "Ontem, 15:30",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
  },
];

export const projectStatusLabels = {
  planning: "Planejamento",
  in_progress: "Em andamento",
  attention: "Atenção",
  delayed: "Atrasado",
  completed: "Concluído",
};

export const projectStatusClasses = {
  planning: "blue",
  in_progress: "green",
  attention: "orange",
  delayed: "red",
  completed: "purple",
};

export const projectPriorityLabels = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
  critical: "Crítica",
};

export const projectPriorityClasses = {
  low: "blue",
  medium: "orange",
  high: "purple",
  critical: "red",
};

export const projectFilters = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "in_progress",
    label: "Em andamento",
  },
  {
    id: "attention",
    label: "Atenção",
  },
  {
    id: "delayed",
    label: "Atrasados",
  },
  {
    id: "planning",
    label: "Planejamento",
  },
];

export const projectStats = [
  {
    id: "total",
    label: "Projetos ativos",
    value: projects.length,
    variation: "+3 este mês",
    tone: "info",
  },
  {
    id: "progress",
    label: "Progresso médio",
    value: `${Math.round(
      projects.reduce((acc, project) => acc + project.progress, 0) /
        projects.length
    )}%`,
    variation: "Execução geral",
    tone: "success",
  },
  {
    id: "critical",
    label: "Projetos críticos",
    value: projects.filter((project) => project.priority === "critical").length,
    variation: "Exigem atenção",
    tone: "danger",
  },
  {
    id: "pending",
    label: "Pendências abertas",
    value: projects.reduce((acc, project) => acc + project.pendingItems, 0),
    variation: "Todas as obras",
    tone: "warning",
  },
];

export const projectTypes = [
  "Residencial",
  "Comercial",
  "Misto",
  "Corporativo",
  "Industrial",
  "Saúde",
];

export const highlightedProjects = projects.filter(
  (project) =>
    project.priority === "critical" ||
    project.status === "delayed" ||
    project.status === "attention"
);