"use client";

import { Check, X } from "lucide-react";
import { Question } from "../data/questions";
import TTSAudio from "./TTSAudio";

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showResult?: boolean;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
}: QuizCardProps) {
  const isListening = question.category === "listening";

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 shadow-sm">
      {/* Progress Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-400">
            Soal {questionNumber}/{totalQuestions}
          </span>
        </div>
        <div className="flex-1 mx-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-de-red transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        {isListening && (
          <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
            🔊 Listening
          </span>
        )}
      </div>

      {/* Audio Button for Listening */}
      {isListening && (
        <div className="mb-6">
          <TTSAudio
            text={question.question.replace(/^Hören Sie: /, "")}
            label="Mainkan Audio"
          />
        </div>
      )}

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 leading-relaxed">
          {isListening
            ? question.question
            : question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = option === question.correctAnswer;

          let buttonClass =
            "w-full p-4 rounded-xl border-2 text-left font-medium transition-all active:scale-[0.99] ";

          if (showResult) {
            // Show correct/incorrect styling
            if (isCorrectOption) {
              buttonClass +=
                "border-green-500 bg-green-50 text-green-800";
            } else if (isSelected && !isCorrectOption) {
              buttonClass +=
                "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass +=
                "border-gray-200 bg-gray-50 text-gray-500";
            }
          } else {
            // Normal selection styling
            if (isSelected) {
              buttonClass +=
                "border-de-red bg-de-red/5 text-de-black";
            } else {
              buttonClass +=
                "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && isCorrectOption && (
                  <Check className="w-5 h-5 text-green-600" />
                )}
                {showResult && isSelected && !isCorrectOption && (
                  <X className="w-5 h-5 text-red-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation (only shown when showing results) */}
      {showResult && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Penjelasan:</span>{" "}
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
