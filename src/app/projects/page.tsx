import { TabProvider } from "@/context/TabContext";
import ProjectsScreen from "@/components/ProjectsScreen";

export default function ProjectsPage() {
  return (
    <TabProvider>
      <ProjectsScreen />
    </TabProvider>
  );
} 