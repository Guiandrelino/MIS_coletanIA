import { AppShell } from "../layout/AppShell";

export function Upload() {
  return (
    <AppShell
      activePage="upload"
      title="Upload"
      description="Envie documentos, plantas, relatórios e arquivos vinculados aos projetos."
      newButtonLabel="Novo upload"
    >
      <section className="card card--large">
        <h2>Upload funcionando</h2>
        <p className="text-muted mt-8">
          Se você está vendo esta tela, a navegação do Upload foi corrigida.
        </p>
      </section>
    </AppShell>
  );
}

export default Upload;