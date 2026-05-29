import { createContext, useContext, useMemo, useState } from "react";

import Dashboard from "./components/pages/Dashborad";
import Feed from "./components/pages/Feed";
import Projetos from "./components/pages/Projects";
import Suprimentos from "./components/pages/Suprimento";
import Pendencias from "./components/pages/Pendencias";
import Alertas from "./components/pages/Alertas";
import Atualizacoes from "./components/pages/Atualizacoes";
import Upload from "./components/pages/Upload";

const NavigationContext = createContext(null);

export function useAppNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useAppNavigation deve ser usado dentro de NavigationContext.");
  }

  return context;
}

const pages = {
  dashboard: {
    title: "Dashboard",
    component: Dashboard,
  },
  feed: {
    title: "MIS Feed",
    component: Feed,
  },
  projetos: {
    title: "Projetos",
    component: Projetos,
  },
  suprimentos: {
    title: "Suprimentos",
    component: Suprimentos,
  },
  pendencias: {
    title: "Pendências",
    component: Pendencias,
  },
  alertas: {
    title: "Alertas",
    component: Alertas,
  },
  atualizacoes: {
    title: "Atualizações",
    component: Atualizacoes,
  },
  upload: {
    title: "Upload",
    component: Upload,
  },
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const CurrentPage = pages[activePage]?.component || Dashboard;

  const navigationValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      navigateTo: setActivePage,
      pages,
    }),
    [activePage]
  );

  return (
    <NavigationContext.Provider value={navigationValue}>
      <CurrentPage />
    </NavigationContext.Provider>
  );
}