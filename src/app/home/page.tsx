import HomeScreen from "@/components/HomeScreen";
import { IconButtonProvider } from "@/context/IconButtonContext";
import { TabProvider } from "@/context/TabContext";

export default function HomePage() {
  return (
    <IconButtonProvider>
      <TabProvider>
        <HomeScreen />
      </TabProvider>
    </IconButtonProvider>
  );
} 