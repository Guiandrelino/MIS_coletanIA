import {
  ChevronDown,
  File,
  FileText,
  Upload as UploadIcon,
  Check,
} from "lucide-react";

import { AppShell } from "../layout/AppShell";

const acceptedFormats = ["PDF", "DWG", "XLSX", "DOCX", "PNG/JPG", "ZIP"];

const projectFields = [
  {
    id: "project-name",
    label: "Nome do projeto",
    value: "Residência Jardins — Etapa 02",
    full: true,
    hasChevron: false,
  },
  {
    id: "project-type",
    label: "Tipo de obra",
    value: "Residencial",
    hasChevron: true,
  },
  {
    id: "technical-owner",
    label: "Responsável técnico",
    value: "Mariana Costa",
    hasChevron: false,
  },
  {
    id: "main-category",
    label: "Categoria principal",
    value: "Arquitetura",
    hasChevron: true,
  },
  {
    id: "city",
    label: "Cidade / UF",
    value: "São Paulo, SP",
    hasChevron: false,
  },
  {
    id: "priority",
    label: "Prioridade",
    value: "Alta",
    hasChevron: true,
  },
];

const uploadStatusCards = [
  {
    id: "files",
    label: "Arquivos",
    value: "0",
    tone: "blue",
  },
  {
    id: "validated",
    label: "Validados",
    value: "0",
    tone: "green",
  },
  {
    id: "pending",
    label: "Pendentes",
    value: "3",
    tone: "sand",
  },
  {
    id: "folders",
    label: "Pastas",
    value: "6",
    tone: "purple",
  },
];

const uploadChecks = [
  "Estrutura de pastas criada",
  "Permissões configuradas",
  "Projeto vinculado à obra",
  "Aguardando arquivos técnicos",
];

const uploadedFiles = [
  {
    id: "file-1",
    name: "Planta baixa térreo.pdf",
    meta: "PDF · 4.8 MB",
    status: "Pronto",
    icon: "file",
  },
  {
    id: "file-2",
    name: "Memorial descritivo.docx",
    meta: "DOCX · 1.2 MB",
    status: "Pronto",
    icon: "doc",
  },
];

function ProjectField({ field }) {
  return (
    <div
      className={`upload-project-field ${field.full ? "is-full" : ""}`}
      role="button"
      tabIndex={0}
    >
      <span>{field.label}</span>

      <div className="upload-project-field__value">
        <strong>{field.value}</strong>

        {field.hasChevron && <ChevronDown size={18} aria-hidden="true" />}
      </div>
    </div>
  );
}

function StatusCard({ item }) {
  return (
    <article className={`upload-status-mini-card tone-${item.tone}`}>
      <span>{item.label}</span>
      <strong>{item.value}</strong>
      <div className="upload-status-mini-card__shape" />
    </article>
  );
}

function FileRow({ file }) {
  return (
    <article className="upload-file-row">
      <div className="upload-file-row__icon">
        {file.icon === "doc" ? (
          <File size={18} aria-hidden="true" />
        ) : (
          <FileText size={18} aria-hidden="true" />
        )}
      </div>

      <div className="upload-file-row__content">
        <strong>{file.name}</strong>
        <span>{file.meta}</span>
      </div>

      <span className="upload-file-row__status">{file.status}</span>
    </article>
  );
}

export function Upload() {
  return (
    <AppShell
      activePage="upload"
      showTopbar={false}
      showPageHeader={false}
      className="upload-project-host"
    >
      <main className="upload-project-page">
        <header className="upload-project-page__header">
          <div>
            <h1>Upload de Projetos</h1>
            <p>
              Envie arquivos técnicos, plantas, documentos e imagens para
              iniciar a organização da obra.
            </p>
          </div>

          <div className="upload-project-page__actions">
            <button type="button" className="upload-header-btn">
              Arquivos recentes
            </button>

            <button type="button" className="upload-header-btn">
              Modelo de pasta <span>˅</span>
            </button>
          </div>
        </header>

        <section className="upload-project-layout">
          <div className="upload-project-card upload-project-card--main">
            <div className="upload-project-card__header">
              <div>
                <h2>Novo pacote de projeto</h2>
                <p>
                  Faça upload dos documentos da obra. Os arquivos serão
                  classificados por tipo, etapa e prioridade.
                </p>
              </div>

              <button type="button" className="upload-project-pill">
                Rascunho salvo
              </button>
            </div>

            <label className="upload-dropzone">
              <input type="file" multiple hidden />

              <div className="upload-dropzone__icon">
                <UploadIcon size={34} aria-hidden="true" />
              </div>

              <h3>Arraste seus arquivos aqui</h3>

              <p>
                Envie plantas, PDFs, planilhas, fotos de obra, memoriais
                descritivos ou documentos técnicos.{" "}
                <strong>Clique para selecionar.</strong>
              </p>

              <div className="upload-dropzone__formats">
                {acceptedFormats.map((format) => (
                  <span key={format}>{format}</span>
                ))}
              </div>
            </label>

            <div className="upload-project-form-grid">
              {projectFields.map((field) => (
                <ProjectField key={field.id} field={field} />
              ))}
            </div>

            <div className="upload-project-card__footer">
              <button type="button" className="upload-footer-btn">
                Cancelar
              </button>

              <button type="button" className="upload-footer-btn is-primary">
                Enviar projeto
              </button>
            </div>
          </div>

          <aside className="upload-project-sidebar">
            <section className="upload-project-card">
              <div className="upload-project-card__header upload-project-card__header--stack">
                <div>
                  <h2>Status do upload</h2>
                  <p>Resumo dos arquivos enviados nesta sessão.</p>
                </div>
              </div>

              <div className="upload-status-grid">
                {uploadStatusCards.map((item) => (
                  <StatusCard key={item.id} item={item} />
                ))}
              </div>

              <div className="upload-status-checks">
                {uploadChecks.map((item, index) => (
                  <div key={item} className="upload-status-check">
                    <span className={index < 3 ? "is-done" : "is-waiting"}>
                      {index < 3 ? <Check size={14} /> : "•"}
                    </span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="upload-project-card">
              <div className="upload-project-card__header upload-project-card__header--stack">
                <div>
                  <h2>Arquivos adicionados</h2>
                  <p>Lista dinâmica dos documentos enviados.</p>
                </div>
              </div>

              <div className="upload-file-list">
                {uploadedFiles.map((file) => (
                  <FileRow key={file.id} file={file} />
                ))}
              </div>
            </section>
          </aside>
        </section>
      </main>
    </AppShell>
  );
}

export default Upload;