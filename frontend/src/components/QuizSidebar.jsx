import React, { useState } from "react";
import {
  Award,
  ChevronDown,
  ChevronRight,
  Globe,
  Layout as LayoutIcon,
  Code,
  Terminal,
  Coffee,
  Database,
  Cpu,
  Star,
  Zap,
  Target,
} from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Technology data
const technologies = [
  { id: "html", name: "HTML", icon: <Globe size={18} /> },
  { id: "css", name: "CSS", icon: <LayoutIcon size={18} /> },
  { id: "js", name: "JavaScript", icon: <Code size={18} /> },
  { id: "react", name: "React", icon: <Cpu size={18} /> },
  { id: "node", name: "Node.js", icon: <Code size={18} /> },
  { id: "mongodb", name: "MongoDB", icon: <Database size={18} /> },
  { id: "java", name: "Java", icon: <Coffee size={18} /> },
  { id: "python", name: "Python", icon: <Terminal size={18} /> },
];

// Level data
const levels = [
  { id: "basic", name: "Basic", questions: 10, icon: <Star size={14} /> },
  {
    id: "intermediate",
    name: "Intermediate",
    questions: 15,
    icon: <Zap size={14} />,
  },
  {
    id: "advanced",
    name: "Advanced",
    questions: 20,
    icon: <Target size={14} />,
  },
];

export default function QuizSidebar({
  selectedTech,
  selectedLevel,
  onTechSelect,
  onLevelSelect,
  onClose,
}) {
  const [openTech, setOpenTech] = useState(null);

  // Handle tech click - toggle dropdown
  const handleTechClick = (techId) => {
    if (openTech === techId) {
      setOpenTech(null); // Close if already open
    } else {
      setOpenTech(techId); // Open the clicked one
      onTechSelect(techId);
    }
  };

  // Handle level selection
  const handleLevelClick = (levelId) => {
    onLevelSelect(levelId);
    if (onClose) onClose();
  };

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="px-4 py-2 text-xs uppercase text-gray-500">
          Select Technology & Level
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {technologies.map((tech) => {
              const isOpen = openTech === tech.id;
              const isSelected = selectedTech === tech.id;

              return (
                <div key={tech.id} className="mb-1">
                  {/* Technology Button */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleTechClick(tech.id)}
                      className={`
                          relative w-full px-3 py-2 hover:bg-gray-100 transition-colors
                          ${isSelected ? "bg-blue-50 border-l-2 border-orange-500" : ""}
                        `}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              isSelected ? "text-orange-600" : "text-gray-600"
                            }
                          >
                            {tech.icon}
                          </span>
                          <span
                            className={`font-medium ${isSelected ? "text-orange-900" : ""}`}
                          >
                            {tech.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {levels.length}
                          </Badge>
                          {isOpen ? (
                            <ChevronDown size={16} className="text-gray-500" />
                          ) : (
                            <ChevronRight size={16} className="text-gray-500" />
                          )}
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Dropdown Levels */}
                  {isOpen && (
                    <div className="ml-6 mr-2 mt-1 p-2 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="space-y-1">
                        {levels.map((level) => {
                          const isLevelSelected =
                            selectedTech === tech.id &&
                            selectedLevel === level.id;

                          return (
                            <Button
                              key={level.id}
                              variant={isLevelSelected ? "default" : "ghost"}
                              size="sm"
                              className={`
                                  w-full justify-between h-9
                                  ${isLevelSelected ? "bg-orange-600 hover:bg-orange-700" : "hover:bg-white"}
                                `}
                              onClick={() => handleLevelClick(level.id)}
                            >
                              <span className="flex items-center gap-2">
                                <span
                                  className={
                                    isLevelSelected
                                      ? "text-white"
                                      : "text-gray-600"
                                  }
                                >
                                  {level.icon}
                                </span>
                                <span className="text-sm">{level.name}</span>
                              </span>
                              <Badge
                                variant={
                                  isLevelSelected ? "secondary" : "outline"
                                }
                                className="text-xs"
                              >
                                {level.questions}Q
                              </Badge>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
