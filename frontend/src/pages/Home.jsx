import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { quizData } from "../constant/QuizData";
import QuizContent from "@/components/QuizContent";
import {
  Globe,
  Layout as LayoutIcon,
  Code,
  Terminal,
  Coffee,
  Database,
  Cpu,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

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

const Home = ({ children }) => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(null);
  const submittedRef = useRef(false);

  const getQuestions = () => {
    if (selectedTech && selectedLevel && quizData[selectedTech]) {
      return quizData[selectedTech][selectedLevel] || [];
    }
    return [];
  };

  const questions = getQuestions();
  const currentQ = questions[currentQuestion];

  const handleTechSelect = (techId) => {
    setSelectedTech(techId);
    setSelectedLevel(null);
    resetQuiz();
  };

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setScore(null);
    submittedRef.current = false;
  };

  const handleAnswerSelect = (answerIndex) => {
    if (userAnswers[currentQuestion] !== undefined) return; // Already answered

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerIndex,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleFinish = async () => {
    if (submittedRef.current) return;

    // Calculate score
    let correct = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });

    const finalScore = {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    };

    // Create payload using finalScore (not score which is still null)
    const payload = {
      title: `${selectedTech.toUpperCase()} - ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Quiz`,
      technology: selectedTech,
      level: selectedLevel,
      totalQuestions: finalScore.total,
      correct: finalScore.correct,
      wrong: finalScore.total - finalScore.correct,
      percentage: finalScore.percentage,
      timestamp: new Date().toISOString(),
    };

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        toast.warning("Please login to save your results");
      } else {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          `${API_BASE}/api/results/create`,
          payload,
          { headers }
        );

        toast.success("Quiz result saved successfully!");
      }
    } catch (error) {
      if (!response?.data.success) {
        toast.error(response.data.error);
      } else if (error.response?.status === 400) {
        toast.error("Invalid data. Please try again.");
      } else {
        toast.error("Could not save result. Please try again later.");
      }
    }

    setScore(finalScore);
    setShowResults(true);
    submittedRef.current = true;
  };

  const handleTryAnother = () => {
    setSelectedLevel(null);
    resetQuiz();
  };

  return (
    <SidebarProvider>
      <AppSidebar
        selectedTech={selectedTech}
        selectedLevel={selectedLevel}
        onTechSelect={handleTechSelect}
        onLevelSelect={handleLevelSelect}
      />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />

          {/* Breadcrumb */}
          <Separator orientation="vertical" className="h-6" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Quiz</BreadcrumbLink>
              </BreadcrumbItem>
              {selectedTech && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      {technologies.find((t) => t.id === selectedTech)?.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
              {selectedLevel && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {selectedLevel.charAt(0).toUpperCase() +
                        selectedLevel.slice(1)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto">
            <Navbar />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto h-[calc(100vh-4rem)]">
          <QuizContent
            selectedTech={selectedTech}
            selectedLevel={selectedLevel}
            questions={questions}
            currentQuestion={currentQuestion}
            currentQ={currentQ}
            userAnswers={userAnswers}
            showResults={showResults}
            score={score}
            technologies={technologies}
            onAnswerSelect={handleAnswerSelect}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onFinish={handleFinish}
            onTryAnother={handleTryAnother}
          />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
