export const updates = [
  {
    id: "UPD-001",
    title: "Concretagem do pavimento térreo concluída",
    description:
      "A equipe finalizou a concretagem do pavimento térreo dentro da janela prevista. O próximo passo é iniciar a cura e liberar a frente estrutural seguinte.",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    category: "Execução",
    type: "progress",
    status: "completed",
    priority: "medium",
    author: "Carlos Mendes",
    role: "Gestor de Obra",
    createdAt: "2026-05-28T09:15:00",
    timeLabel: "Hoje, 09:15",
    attachments: 3,
    comments: 5,
    likes: 12,
  },
  {
    id: "UPD-002",
    title: "Entrega de cabos elétricos reagendada",
    description:
      "O fornecedor informou nova previsão de entrega para os cabos elétricos. A alteração pode exigir replanejamento da frente de instalações.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Suprimentos",
    type: "warning",
    status: "attention",
    priority: "high",
    author: "Mariana Lopes",
    role: "Coordenadora Técnica",
    createdAt: "2026-05-28T10:40:00",
    timeLabel: "Hoje, 10:40",
    attachments: 1,
    comments: 8,
    likes: 4,
  },
  {
    id: "UPD-003",
    title: "Nova revisão do cronograma executivo",
    description:
      "Foi publicada uma atualização do cronograma executivo com ajustes nas etapas de acabamento, instalações e entrega técnica.",
    project: "Torre Central",
    location: "Santo André, SP",
    category: "Planejamento",
    type: "document",
    status: "published",
    priority: "high",
    author: "Ricardo Alves",
    role: "Planejamento",
    createdAt: "2026-05-28T11:20:00",
    timeLabel: "Hoje, 11:20",
    attachments: 2,
    comments: 6,
    likes: 9,
  },
  {
    id: "UPD-004",
    title: "Relatório fotográfico atualizado",
    description:
      "Foram adicionadas novas fotos das frentes de alvenaria, hidráulica e preparação de áreas comuns.",
    project: "Complexo Vila Verde",
    location: "Jundiaí, SP",
    category: "Registro de obra",
    type: "media",
    status: "published",
    priority: "low",
    author: "Fernanda Rocha",
    role: "Engenheira Responsável",
    createdAt: "2026-05-27T17:10:00",
    timeLabel: "Ontem, 17:10",
    attachments: 14,
    comments: 3,
    likes: 15,
  },
  {
    id: "UPD-005",
    title: "Pendência documental resolvida",
    description:
      "A documentação técnica pendente foi recebida, validada e anexada ao repositório do projeto.",
    project: "Complexo Vila Verde",
    location: "Jundiaí, SP",
    category: "Documentação",
    type: "success",
    status: "completed",
    priority: "medium",
    author: "Fernanda Rocha",
    role: "Engenheira Responsável",
    createdAt: "2026-05-27T15:35:00",
    timeLabel: "Ontem, 15:35",
    attachments: 4,
    comments: 2,
    likes: 7,
  },
  {
    id: "UPD-006",
    title: "Risco identificado na sequência de forro e elétrica",
    description:
      "Foi identificado conflito entre a execução de forro e a etapa elétrica. A equipe deve revisar a sequência para evitar retrabalho.",
    project: "Torre Central",
    location: "Santo André, SP",
    category: "Risco operacional",
    type: "alert",
    status: "attention",
    priority: "critical",
    author: "Ricardo Alves",
    role: "Planejamento",
    createdAt: "2026-05-28T08:50:00",
    timeLabel: "Hoje, 08:50",
    attachments: 0,
    comments: 11,
    likes: 3,
  },
  {
    id: "UPD-007",
    title: "Medição físico-financeira enviada para revisão",
    description:
      "A medição semanal foi consolidada e enviada para validação da coordenação. O avanço físico registrado foi de 4,8% no período.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Financeiro",
    type: "document",
    status: "in_review",
    priority: "medium",
    author: "Mariana Lopes",
    role: "Coordenadora Técnica",
    createdAt: "2026-05-27T14:05:00",
    timeLabel: "Ontem, 14:05",
    attachments: 2,
    comments: 4,
    likes: 6,
  },
  {
    id: "UPD-008",
    title: "Equipe de acabamento recomposta",
    description:
      "Após baixa de presença no início do dia, a equipe foi recomposta e a produtividade voltou ao nível planejado.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Mão de obra",
    type: "success",
    status: "completed",
    priority: "low",
    author: "Patrícia Gomes",
    role: "Operações",
    createdAt: "2026-05-28T13:25:00",
    timeLabel: "Hoje, 13:25",
    attachments: 0,
    comments: 2,
    likes: 8,
  },
];

export const updateTypeLabels = {
  progress: "Progresso",
  warning: "Atenção",
  document: "Documento",
  media: "Mídia",
  success: "Concluído",
  alert: "Alerta",
};

export const updateTypeClasses = {
  progress: "blue",
  warning: "orange",
  document: "purple",
  media: "blue",
  success: "green",
  alert: "red",
};

export const updateStatusLabels = {
  completed: "Concluído",
  attention: "Atenção",
  published: "Publicado",
  in_review: "Em revisão",
};

export const updateStatusClasses = {
  completed: "green",
  attention: "orange",
  published: "blue",
  in_review: "purple",
};

export const updatePriorityLabels = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
  critical: "Crítica",
};

export const updatePriorityClasses = {
  low: "blue",
  medium: "orange",
  high: "purple",
  critical: "red",
};

export const updateCategories = [
  "Execução",
  "Suprimentos",
  "Planejamento",
  "Registro de obra",
  "Documentação",
  "Risco operacional",
  "Financeiro",
  "Mão de obra",
];

export const updateFilters = [
  {
    id: "all",
    label: "Todas",
  },
  {
    id: "progress",
    label: "Progresso",
  },
  {
    id: "warning",
    label: "Atenção",
  },
  {
    id: "document",
    label: "Documentos",
  },
  {
    id: "media",
    label: "Mídia",
  },
  {
    id: "alert",
    label: "Alertas",
  },
];

export const updateStats = [
  {
    id: "total",
    label: "Atualizações",
    value: updates.length,
    variation: "Últimas movimentações",
    tone: "info",
  },
  {
    id: "today",
    label: "Hoje",
    value: updates.filter((update) => update.timeLabel.includes("Hoje"))
      .length,
    variation: "Novos registros",
    tone: "success",
  },
  {
    id: "attention",
    label: "Em atenção",
    value: updates.filter((update) => update.status === "attention").length,
    variation: "Exigem acompanhamento",
    tone: "warning",
  },
  {
    id: "attachments",
    label: "Anexos",
    value: updates.reduce((acc, update) => acc + update.attachments, 0),
    variation: "Arquivos vinculados",
    tone: "purple",
  },
];

export const recentUpdates = updates.slice(0, 5);

export const attentionUpdates = updates.filter(
  (update) =>
    update.status === "attention" ||
    update.priority === "critical" ||
    update.type === "alert"
);

export const documentUpdates = updates.filter(
  (update) => update.type === "document"
);

export const mediaUpdates = updates.filter((update) => update.type === "media");

export const updatesByProject = updates.reduce((acc, update) => {
  if (!acc[update.project]) {
    acc[update.project] = [];
  }

  acc[update.project].push(update);

  return acc;
}, {});