import Portfolio from "@/components/Portfolio";
import { TabProvider } from "@/context/TabContext";

export default function PortfolioPage() {
  return (
    <TabProvider>
      <Portfolio />
    </TabProvider>
  );
} 