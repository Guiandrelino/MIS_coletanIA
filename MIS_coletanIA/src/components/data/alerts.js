export const alerts = [
  {
    id: "ALT-001",
    title: "Atraso crítico na entrega de concreto",
    description:
      "A entrega programada para hoje às 08h não foi confirmada pelo fornecedor. A etapa de concretagem pode impactar o cronograma da obra.",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    category: "Suprimentos",
    priority: "critical",
    status: "unread",
    responsible: "Carlos Mendes",
    dueDate: "Hoje",
    createdAt: "2026-05-28T08:15:00",
  },
  {
    id: "ALT-002",
    title: "Equipe abaixo do previsto no canteiro",
    description:
      "A obra registrou presença inferior ao planejado para a frente de acabamento. Pode haver impacto na produtividade diária.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Mão de obra",
    priority: "warning",
    status: "unread",
    responsible: "Mariana Lopes",
    dueDate: "Hoje",
    createdAt: "2026-05-28T09:40:00",
  },
  {
    id: "ALT-003",
    title: "Pendência documental sem atualização",
    description:
      "O documento de aprovação técnica permanece sem atualização há mais de 5 dias. Recomenda-se acionar o responsável.",
    project: "Complexo Vila Verde",
    location: "Jundiaí, SP",
    category: "Documentação",
    priority: "warning",
    status: "read",
    responsible: "Fernanda Rocha",
    dueDate: "Amanhã",
    createdAt: "2026-05-27T16:20:00",
  },
  {
    id: "ALT-004",
    title: "Consumo de material acima da média",
    description:
      "O consumo de argamassa está 18% acima da média prevista para o estágio atual da obra.",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    category: "Suprimentos",
    priority: "info",
    status: "read",
    responsible: "João Ferreira",
    dueDate: "Esta semana",
    createdAt: "2026-05-27T11:05:00",
  },
  {
    id: "ALT-005",
    title: "Risco de conflito entre etapas",
    description:
      "A instalação elétrica foi reagendada para o mesmo período da execução de forro. É necessário revisar a sequência operacional.",
    project: "Torre Central",
    location: "Santo André, SP",
    category: "Planejamento",
    priority: "critical",
    status: "unread",
    responsible: "Ricardo Alves",
    dueDate: "Hoje",
    createdAt: "2026-05-28T10:30:00",
  },
  {
    id: "ALT-006",
    title: "Fornecedor sem confirmação de agenda",
    description:
      "O fornecedor de esquadrias ainda não confirmou a data de medição técnica. A indefinição pode afetar o prazo de instalação.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Fornecedor",
    priority: "warning",
    status: "read",
    responsible: "Patrícia Gomes",
    dueDate: "2 dias",
    createdAt: "2026-05-26T14:50:00",
  },
];

export const alertPriorityLabels = {
  critical: "Crítico",
  warning: "Atenção",
  info: "Informativo",
  success: "Resolvido",
};

export const alertPriorityClasses = {
  critical: "red",
  warning: "orange",
  info: "blue",
  success: "green",
};

export const alertStatusLabels = {
  unread: "Não lido",
  read: "Lido",
};

export const alertStats = [
  {
    id: "total",
    label: "Total de alertas",
    value: alerts.length,
    variation: "+12%",
    tone: "info",
  },
  {
    id: "critical",
    label: "Alertas críticos",
    value: alerts.filter((alert) => alert.priority === "critical").length,
    variation: "Alta prioridade",
    tone: "danger",
  },
  {
    id: "unread",
    label: "Não lidos",
    value: alerts.filter((alert) => alert.status === "unread").length,
    variation: "Exigem análise",
    tone: "warning",
  },
  {
    id: "supplies",
    label: "Suprimentos",
    value: alerts.filter((alert) => alert.category === "Suprimentos").length,
    variation: "Área mais recorrente",
    tone: "success",
  },
];

export const alertFilters = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "critical",
    label: "Críticos",
  },
  {
    id: "warning",
    label: "Atenção",
  },
  {
    id: "unread",
    label: "Não lidos",
  },
];