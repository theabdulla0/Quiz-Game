import React from "react";
import { CheckCircle, XCircle, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizContent({
  selectedTech,
  selectedLevel,
  questions,
  currentQuestion,
  currentQ,
  userAnswers,
  showResults,
  score,
  technologies,
  onAnswerSelect,
  onPrevious,
  onNext,
  onFinish,
  onTryAnother,
}) {
  // No tech selected
  if (!selectedTech) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <div className="mx-auto mb-4">
              <Trophy size={48} className="text-yellow-500" />
            </div>
            <CardTitle className="text-center text-2xl">
              Welcome to Tech Quiz! 👋
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Select a technology from the sidebar to begin your learning
              journey
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tech selected but no level
  if (!selectedLevel) {
    const tech = technologies.find((t) => t.id === selectedTech);
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full">
              {tech?.icon}
            </div>
            <CardTitle className="text-center text-xl">
              {tech?.name} Quiz Ready!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Choose a difficulty level from the dropdown to start
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show Results
  if (showResults && score) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Quiz Completed! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-6">
              {/* Score Circle */}
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">
                    {score.percentage}%
                  </span>
                </div>
                <Progress
                  value={score.percentage}
                  className="h-32 w-32 rounded-full"
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-4">
                    <CheckCircle
                      className="text-green-500 mx-auto mb-2"
                      size={32}
                    />
                    <p className="text-2xl font-bold text-green-700">
                      {score.correct}
                    </p>
                    <p className="text-sm text-green-600">Correct</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-4">
                    <XCircle className="text-red-500 mx-auto mb-2" size={32} />
                    <p className="text-2xl font-bold text-red-700">
                      {score.total - score.correct}
                    </p>
                    <p className="text-sm text-red-600">Wrong</p>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="w-full" onClick={onTryAnother}>
                Try Another Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show Quiz Question
  if (currentQ) {
    return (
      <div className="flex items-center justify-center min-h-full p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-lg">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <Badge variant="outline">{selectedLevel}</Badge>
            </div>
            <Progress
              value={((currentQuestion + 1) / questions.length) * 100}
              className="h-2"
            />
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Question */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-lg">{currentQ.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isAnswered = userAnswers[currentQuestion] !== undefined;
                const isSelected = userAnswers[currentQuestion] === index;
                const isCorrect = index === currentQ.correctAnswer;

                let buttonClass = "w-full justify-start h-auto py-3 px-4 ";
                if (isAnswered) {
                  if (isCorrect) {
                    buttonClass +=
                      "border-green-500 bg-green-50 hover:bg-green-50";
                  } else if (isSelected) {
                    buttonClass += "border-red-500 bg-red-50 hover:bg-red-50";
                  }
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonClass}
                    disabled={isAnswered}
                    onClick={() => onAnswerSelect(index)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        {isAnswered && isCorrect && (
                          <CheckCircle className="text-green-500" size={20} />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="text-red-500" size={20} />
                        )}
                        {!isAnswered && (
                          <div className="w-5 h-5 border-2 rounded-full" />
                        )}
                      </div>
                      <span className="text-left">{option}</span>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>

              {currentQuestion + 1 === questions.length ? (
                <Button onClick={onFinish}>Finish Quiz</Button>
              ) : (
                <Button onClick={onNext}>Next Question</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
