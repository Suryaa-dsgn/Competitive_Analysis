import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import { companyIntel, type CompetitorId } from "./data/research";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { PositioningMap } from "./components/PositioningMap";
import { ComparisonTable } from "./components/ComparisonTable";
import { SalesFlow } from "./components/SalesFlow";
import { CompanyCards } from "./components/CompanyCards";
import { CustomerProof } from "./components/CustomerProof";
import { Implications } from "./components/Implications";
import { Discussion } from "./components/Discussion";
import { Sources } from "./components/Sources";

export default function App() {
  const [openProfiles, setOpenProfiles] = useState<CompetitorId[]>([]);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  // Expand all collapsed content for print, then restore the on-screen state.
  const beforePrint = useRef<{ profiles: CompetitorId[]; sources: boolean } | null>(null);
  const state = useRef({ profiles: openProfiles, sources: sourcesOpen });
  state.current = { profiles: openProfiles, sources: sourcesOpen };

  useEffect(() => {
    const expand = () => {
      beforePrint.current = state.current;
      flushSync(() => {
        setOpenProfiles(companyIntel.map((c) => c.id));
        setSourcesOpen(true);
      });
    };
    const restore = () => {
      if (!beforePrint.current) return;
      setOpenProfiles(beforePrint.current.profiles);
      setSourcesOpen(beforePrint.current.sources);
      beforePrint.current = null;
    };
    window.addEventListener("beforeprint", expand);
    window.addEventListener("afterprint", restore);
    return () => {
      window.removeEventListener("beforeprint", expand);
      window.removeEventListener("afterprint", restore);
    };
  }, []);

  const openProfile = (id: CompetitorId) => {
    flushSync(() => setOpenProfiles((prev) => (prev.includes(id) ? prev : [...prev, id])));
    document.getElementById(`profile-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Tooltip.Provider delayDuration={150}>
      <Header />
      <main className="mx-auto max-w-[1280px] px-5 lg:px-8 print:max-w-none print:px-0">
        <Overview onOpenProfile={openProfile} />
        <PositioningMap />
        <ComparisonTable />
        <SalesFlow />
        <CompanyCards open={openProfiles} onOpenChange={setOpenProfiles} />
        <CustomerProof />
        <Implications />
        <Discussion />
        <Sources open={sourcesOpen} onOpenChange={setSourcesOpen} />
      </main>
    </Tooltip.Provider>
  );
}
