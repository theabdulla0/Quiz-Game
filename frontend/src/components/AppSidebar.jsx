import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import QuizSidebar from "./QuizSidebar";

const AppSidebar = ({
  selectedTech,
  selectedLevel,
  onTechSelect,
  onLevelSelect,
}) => {
  return (
    <Sidebar collapsible="offcanvas">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="p-2 font-semibold text-lg">
              <a href="#">Quiz Game</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar content */}
      <QuizSidebar
        selectedTech={selectedTech}
        selectedLevel={selectedLevel}
        onTechSelect={onTechSelect}
        onLevelSelect={onLevelSelect}
      />
    </Sidebar>
  );
};

export default AppSidebar;
