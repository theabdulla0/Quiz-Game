import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Trophy,
  Target,
  TrendingUp,
  AlertCircle,
  Calendar,
  CheckCircle,
  XCircle,
  BarChart3,
  Filter,
  Zap,
  Star,
  Award,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const PerformanceBadge = ({ percent }) => {
  if (percent >= 85)
    return (
      <Badge className="bg-green-500 hover:bg-green-600">
        <Trophy className="w-3 h-3 mr-1" />
        Excellent
      </Badge>
    );
  if (percent >= 65)
    return (
      <Badge className="bg-blue-500 hover:bg-blue-600">
        <Star className="w-3 h-3 mr-1" />
        Good
      </Badge>
    );
  if (percent >= 45)
    return (
      <Badge className="bg-yellow-500 hover:bg-yellow-600">
        <Zap className="w-3 h-3 mr-1" />
        Average
      </Badge>
    );
  return (
    <Badge variant="destructive">
      <Target className="w-3 h-3 mr-1" />
      Needs Work
    </Badge>
  );
};

const LevelBadge = ({ level }) => {
  const variants = {
    basic: {
      color: "bg-green-100 text-green-800 border-green-300",
      icon: "🌱",
    },
    intermediate: {
      color: "bg-blue-100 text-blue-800 border-blue-300",
      icon: "🚀",
    },
    advanced: {
      color: "bg-purple-100 text-purple-800 border-purple-300",
      icon: "⚡",
    },
  };

  const variant = variants[level] || variants.basic;

  return (
    <Badge variant="outline" className={`${variant.color} font-medium`}>
      <span className="mr-1">{variant.icon}</span>
      {level?.charAt(0).toUpperCase() + level?.slice(1)}
    </Badge>
  );
};

const LoadingSkeleton = () => (
  <div className="container mx-auto p-6 space-y-6">
    <Skeleton className="h-12 w-48" />
    <div className="grid gap-4">
      <Skeleton className="h-32 w-full" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    </div>
  </div>
);

const MyResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [technologies, setTechnologies] = useState([]);

  const getAuthHeader = useCallback(() => {
    const token = localStorage.getItem("authToken") || null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  // Fetch results
  useEffect(() => {
    let mounted = true;
    const fetchResults = async (tech = "all") => {
      setLoading(true);
      setError(null);
      try {
        const q =
          tech && tech.toLowerCase() !== "all"
            ? `?technology=${encodeURIComponent(tech)}`
            : "";
        const res = await axios.get(`${API_BASE}/api/results${q}`, {
          headers: { "Content-Type": "application/json", ...getAuthHeader() },
        });

        if (!mounted) return;
        if (res.status === 200 && res.data.success) {
          setResults(res.data.results || []);
        } else {
          setResults([]);
          toast.warn("Unexpected response from server.");
        }
      } catch (err) {
        console.error("Error fetching results:", err);
        if (!mounted) return;
        if (err?.response?.status === 401) {
          setError("Not authenticated. Please log in to view results.");
          toast.error("Please login to view results.");
        } else {
          setError("Could not load results from server.");
          toast.error("Could not load results.");
        }
        setResults([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchResults(selectedTechnology);
    return () => {
      mounted = false;
    };
  }, [selectedTechnology, getAuthHeader]);

  // Fetch list of all technologies
  useEffect(() => {
    let mounted = true;
    const fetchTechList = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/results`, {
          headers: { "Content-Type": "application/json", ...getAuthHeader() },
        });

        if (!mounted) return;
        if (res.status === 200 && res.data.success) {
          const all = res.data.results || [];
          const set = new Set();
          all.forEach((r) => {
            if (r.technology) set.add(r.technology);
          });
          const arr = Array.from(set).sort((a, b) =>
            a.localeCompare(b, "en", { sensitivity: "base" })
          );
          setTechnologies(arr);
        }
      } catch (err) {
        console.error("Error fetching technologies:", err);
      }
    };
    fetchTechList();
    return () => {
      mounted = false;
    };
  }, [getAuthHeader]);

  // Summary calculation
  const summary = useMemo(() => {
    const totalQs = results.reduce(
      (s, r) => s + (Number(r.totalQuestions) || 0),
      0
    );
    const totalCorrect = results.reduce(
      (s, r) => s + (Number(r.correct) || 0),
      0
    );
    const totalWrong = results.reduce((s, r) => s + (Number(r.wrong) || 0), 0);
    const pct = totalQs ? Math.round((totalCorrect / totalQs) * 100) : 0;
    return { totalQs, totalCorrect, totalWrong, pct };
  }, [results]);

  // Group by technology
  const grouped = useMemo(() => {
    const map = {};
    results.forEach((r) => {
      const tech = r.technology || "General";
      if (!map[tech]) map[tech] = [];
      map[tech].push(r);
    });
    return map;
  }, [results]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="container mx-auto p-6">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
              <Trophy className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle>No Quiz Results Yet</CardTitle>
            <CardDescription>
              Start taking quizzes to see your results here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              onClick={() => (window.location.href = "/")}
            >
              Start a Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              My Quiz Results
            </h1>
            <p className="text-gray-500 mt-1">
              Track your learning progress across different technologies
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            <BarChart3 className="w-3 h-3 mr-1" />
            {results.length} Quiz{results.length > 1 ? "zes" : ""} Completed
          </Badge>
        </div>

        {/* Filter Tabs */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <CardTitle className="text-base">Filter by Technology</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs
              value={selectedTechnology}
              onValueChange={setSelectedTechnology}
            >
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
                <TabsTrigger value="all">All</TabsTrigger>
                {technologies.slice(0, 8).map((tech) => (
                  <TabsTrigger key={tech} value={tech}>
                    {tech}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Questions
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summary.totalQs}</div>
              <p className="text-xs text-muted-foreground">
                Across all quizzes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Correct Answers
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {summary.totalCorrect}
              </div>
              <Progress value={summary.pct} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Wrong Answers
              </CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {summary.totalWrong}
              </div>
              <p className="text-xs text-muted-foreground">
                Room for improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Accuracy
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {summary.pct}%
              </div>
              <PerformanceBadge percent={summary.pct} />
            </CardContent>
          </Card>
        </div>

        {/* Results by Technology */}
        {Object.keys(grouped).map((tech) => (
          <div key={tech} className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold">{tech} Quizzes</h2>
              <Badge variant="secondary">{grouped[tech].length}</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {grouped[tech].map((r) => {
                const accuracy = Math.round(
                  (r.correct / r.totalQuestions) * 100 || 0
                );

                return (
                  <Card
                    key={r._id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`h-2 ${
                        accuracy >= 85
                          ? "bg-green-500"
                          : accuracy >= 65
                            ? "bg-blue-500"
                            : accuracy >= 45
                              ? "bg-yellow-500"
                              : "bg-red-500"
                      }`}
                    />

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">
                            {r.title || "Untitled Quiz"}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(r.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <LevelBadge level={r.level} />
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold">
                            {r.correct}/{r.totalQuestions}
                          </p>
                          <p className="text-xs text-muted-foreground">Score</p>
                        </div>
                        <PerformanceBadge percent={accuracy} />
                      </div>

                      <Progress value={accuracy} className="h-2" />

                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center p-2 bg-green-50 rounded">
                          <p className="font-semibold text-green-700">
                            {r.correct}
                          </p>
                          <p className="text-xs text-green-600">Correct</p>
                        </div>
                        <div className="text-center p-2 bg-red-50 rounded">
                          <p className="font-semibold text-red-700">
                            {r.wrong}
                          </p>
                          <p className="text-xs text-red-600">Wrong</p>
                        </div>
                        <div className="text-center p-2 bg-blue-50 rounded">
                          <p className="font-semibold text-blue-700">
                            {accuracy}%
                          </p>
                          <p className="text-xs text-blue-600">Accuracy</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResult;
