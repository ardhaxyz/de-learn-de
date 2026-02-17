/** @format */

export interface Question {
  id: number;
  category: "listening" | "reading" | "writing" | "speaking";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Import questions from JSON file
import questionsData from "../../data/questions.json";

export const QUESTIONS: Question[] = questionsData as Question[];

// Filter questions by category and difficulty
export function getQuestionsByCategoryAndDifficulty(
  category: "listening" | "reading" | "writing" | "speaking",
  difficulty: "easy" | "medium" | "hard"
): Question[] {
  return QUESTIONS.filter(
    (q) => q.category === category && q.difficulty === difficulty
  );
}

// Get random questions with replacement
export function getRandomQuestions(
  category: "listening" | "reading",
  difficulty: "easy" | "medium" | "hard",
  count: number = 5
): Question[] {
  const pool = getQuestionsByCategoryAndDifficulty(category, difficulty);

  if (pool.length === 0) {
    console.warn(
      `No questions found for ${category} + ${difficulty}, using all available`
    );
    // Fallback to all questions of that category
    const fallbackPool = QUESTIONS.filter((q) => q.category === category);
    if (fallbackPool.length === 0) {
      throw new Error(`No questions available for category: ${category}`);
    }

    const selected = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * fallbackPool.length);
      selected.push(fallbackPool[randomIndex]);
    }
    return selected;
  }

  const selected = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    selected.push(pool[randomIndex]);
  }
  return selected;
}

// Get difficulty based on day number
export function getDifficultyForDay(
  day: number
): "easy" | "medium" | "hard" {
  if (day >= 1 && day <= 4) return "easy";
  if (day >= 5 && day <= 8) return "medium";
  return "hard";
}

// Calculate quiz result
export interface QuizResult {
  correct: number;
  total: number;
  passed: boolean;
  percentage: number;
}

export function calculateResult(
  questions: Question[],
  answers: (number | null)[]
): QuizResult {
  let correct = 0;

  questions.forEach((question, index) => {
    const answerIndex = answers[index];
    if (answerIndex !== null) {
      const selectedOption = question.options[answerIndex];
      if (selectedOption === question.correctAnswer) {
        correct++;
      }
    }
  });

  const total = questions.length;
  const percentage = Math.round((correct / total) * 100);
  const passed = correct >= 4; // Need at least 4/5 to pass (80%)

  return {
    correct,
    total,
    passed,
    percentage,
  };
}

// Check if user can attempt quiz (has hearts)
export function canAttemptQuiz(hearts: number): boolean {
  return hearts > 0;
}

// Get heart emoji display
export function getHeartsDisplay(
  hearts: number,
  maxHearts: number = 3
): string {
  const filled = "❤️".repeat(hearts);
  const empty = "💔".repeat(maxHearts - hearts);
  return filled + empty;
}
