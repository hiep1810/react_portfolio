import Portfolio from "@/components/Portfolio";
import { TabProvider } from "@/context/TabContext";

export default function Home() {
  return (
    <TabProvider>
      <Portfolio />
    </TabProvider>
  );
}