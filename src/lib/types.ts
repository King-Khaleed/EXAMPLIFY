export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  topic: string;
};

export type UserAnswerMap = {
  [questionId: string]: string; // questionId -> selectedOptionId
};

export type Course = {
  code: string;
  title: string;
  questions: Question[];
  totalQuestions: number;
  minQuestions: number;
};
