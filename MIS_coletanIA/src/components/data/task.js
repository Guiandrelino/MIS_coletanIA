export const tasks = [
  {
    id: "TASK-001",
    title: "Validar entrega de concreto",
    description:
      "Confirmar com o fornecedor se a entrega do concreto será realizada dentro da janela prevista para não comprometer a concretagem.",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    category: "Suprimentos",
    status: "pending",
    priority: "critical",
    responsible: "Carlos Mendes",
    dueDate: "Hoje",
    createdAt: "2026-05-28T08:30:00",
    checklist: [
      "Confirmar horário com fornecedor",
      "Validar disponibilidade da equipe",
      "Registrar atualização no cronograma",
    ],
  },
  {
    id: "TASK-002",
    title: "Revisar cronograma da etapa elétrica",
    description:
      "A etapa elétrica foi reagendada e precisa ser compatibilizada com a execução de forro e fechamento de paredes.",
    project: "Torre Central",
    location: "Santo André, SP",
    category: "Planejamento",
    status: "in_progress",
    priority: "high",
    responsible: "Ricardo Alves",
    dueDate: "Hoje",
    createdAt: "2026-05-28T09:10:00",
    checklist: [
      "Revisar conflito entre etapas",
      "Atualizar sequência de execução",
      "Comunicar responsáveis das frentes impactadas",
    ],
  },
  {
    id: "TASK-003",
    title: "Solicitar documentação técnica pendente",
    description:
      "O documento de aprovação técnica está sem atualização há mais de 5 dias e precisa ser cobrado do responsável.",
    project: "Complexo Vila Verde",
    location: "Jundiaí, SP",
    category: "Documentação",
    status: "pending",
    priority: "medium",
    responsible: "Fernanda Rocha",
    dueDate: "Amanhã",
    createdAt: "2026-05-27T16:20:00",
    checklist: [
      "Identificar documento pendente",
      "Acionar responsável técnico",
      "Registrar retorno recebido",
    ],
  },
  {
    id: "TASK-004",
    title: "Atualizar medição físico-financeira",
    description:
      "Consolidar avanço físico da semana e comparar com os valores financeiros consumidos no período.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Financeiro",
    status: "in_review",
    priority: "medium",
    responsible: "Mariana Lopes",
    dueDate: "2 dias",
    createdAt: "2026-05-27T11:45:00",
    checklist: [
      "Conferir avanço físico",
      "Validar notas e custos associados",
      "Atualizar painel executivo",
    ],
  },
  {
    id: "TASK-005",
    title: "Confirmar agenda do fornecedor de esquadrias",
    description:
      "O fornecedor ainda não confirmou a data de medição técnica. A indefinição pode afetar o prazo de instalação.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Fornecedor",
    status: "pending",
    priority: "high",
    responsible: "Patrícia Gomes",
    dueDate: "Hoje",
    createdAt: "2026-05-26T14:50:00",
    checklist: [
      "Enviar cobrança ao fornecedor",
      "Confirmar data de medição",
      "Atualizar previsão de instalação",
    ],
  },
  {
    id: "TASK-006",
    title: "Regularizar estoque de argamassa",
    description:
      "O consumo de argamassa está acima da média prevista e o estoque precisa ser reavaliado para evitar ruptura.",
    project: "Residencial Aurora",
    location: "Campinas, SP",
    category: "Suprimentos",
    status: "pending",
    priority: "medium",
    responsible: "João Ferreira",
    dueDate: "Esta semana",
    createdAt: "2026-05-27T11:05:00",
    checklist: [
      "Revisar consumo real",
      "Atualizar previsão de compra",
      "Solicitar orçamento complementar",
    ],
  },
  {
    id: "TASK-007",
    title: "Validar presença da equipe de acabamento",
    description:
      "A frente de acabamento registrou equipe abaixo do previsto. É necessário validar se haverá recomposição para manter produtividade.",
    project: "Edifício Horizonte",
    location: "São Paulo, SP",
    category: "Mão de obra",
    status: "completed",
    priority: "medium",
    responsible: "Mariana Lopes",
    dueDate: "Concluído hoje",
    createdAt: "2026-05-28T09:40:00",
    checklist: [
      "Validar presença registrada",
      "Acionar encarregado",
      "Confirmar recomposição da equipe",
    ],
  },
  {
    id: "TASK-008",
    title: "Revisar impacto do atraso hospitalar",
    description:
      "A ampliação hospitalar apresenta atraso em etapas críticas e precisa de plano de recuperação para reduzir impacto no cronograma.",
    project: "Hospital São Lucas",
    location: "Sorocaba, SP",
    category: "Cronograma",
    status: "in_progress",
    priority: "critical",
    responsible: "João Ferreira",
    dueDate: "Hoje",
    createdAt: "2026-05-28T10:15:00",
    checklist: [
      "Mapear etapas atrasadas",
      "Definir plano de recuperação",
      "Apresentar nova previsão de entrega",
    ],
  },
];

export const taskStatusLabels = {
  pending: "Pendente",
  in_progress: "Em andamento",
  in_review: "Em revisão",
  completed: "Concluída",
};

export const taskStatusClasses = {
  pending: "orange",
  in_progress: "blue",
  in_review: "purple",
  completed: "green",
};

export const taskPriorityLabels = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
  critical: "Crítica",
};

export const taskPriorityClasses = {
  low: "blue",
  medium: "orange",
  high: "purple",
  critical: "red",
};

export const taskCategories = [
  "Suprimentos",
  "Planejamento",
  "Documentação",
  "Financeiro",
  "Fornecedor",
  "Mão de obra",
  "Cronograma",
];

export const taskFilters = [
  {
    id: "all",
    label: "Todas",
  },
  {
    id: "pending",
    label: "Pendentes",
  },
  {
    id: "in_progress",
    label: "Em andamento",
  },
  {
    id: "in_review",
    label: "Em revisão",
  },
  {
    id: "completed",
    label: "Concluídas",
  },
];

export const taskStats = [
  {
    id: "total",
    label: "Total de pendências",
    value: tasks.length,
    variation: "Todas as obras",
    tone: "info",
  },
  {
    id: "pending",
    label: "Pendentes",
    value: tasks.filter((task) => task.status === "pending").length,
    variation: "Aguardando ação",
    tone: "warning",
  },
  {
    id: "critical",
    label: "Críticas",
    value: tasks.filter((task) => task.priority === "critical").length,
    variation: "Alta urgência",
    tone: "danger",
  },
  {
    id: "completed",
    label: "Concluídas",
    value: tasks.filter((task) => task.status === "completed").length,
    variation: "Hoje / recentes",
    tone: "success",
  },
];

export const kanbanColumns = [
  {
    id: "pending",
    title: "Pendente",
    description: "Itens que ainda precisam de primeira ação.",
    taskIds: tasks
      .filter((task) => task.status === "pending")
      .map((task) => task.id),
  },
  {
    id: "in_progress",
    title: "Em andamento",
    description: "Itens que já estão sendo tratados pela equipe.",
    taskIds: tasks
      .filter((task) => task.status === "in_progress")
      .map((task) => task.id),
  },
  {
    id: "in_review",
    title: "Em revisão",
    description: "Itens aguardando validação ou conferência.",
    taskIds: tasks
      .filter((task) => task.status === "in_review")
      .map((task) => task.id),
  },
  {
    id: "completed",
    title: "Concluídas",
    description: "Itens finalizados ou resolvidos recentemente.",
    taskIds: tasks
      .filter((task) => task.status === "completed")
      .map((task) => task.id),
  },
];

export const criticalTasks = tasks.filter(
  (task) => task.priority === "critical"
);

export const openTasks = tasks.filter(
  (task) => task.status !== "completed"
);

export const overdueTasks = tasks.filter(
  (task) =>
    task.dueDate === "Hoje" &&
    task.status !== "completed" &&
    (task.priority === "critical" || task.priority === "high")
);