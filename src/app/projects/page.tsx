import { TabProvider } from "@/context/TabContext";
import ProjectsScreen from "@/components/ProjectsScreen";
import { IconButtonProvider } from "@/context/IconButtonContext";

export default function ProjectsPage() {
  return (
    <IconButtonProvider>
      <TabProvider>
        <ProjectsScreen />
      </TabProvider>
    </IconButtonProvider>
  );
} 