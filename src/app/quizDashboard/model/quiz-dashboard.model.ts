export interface QuizOption {
    text: string;
}

export interface StandardReponse {
    httpStatus: string;
    message: string;
}

export interface QuizQuestion {
    questionText: string;
    questionType: string;
    points: number;
    options: string[];
    correctAnswer: string[];
}

export interface QuizDetails {
    id: number;
    title: string;
    description: string;
    category: string;
    createdBy: string;
    questionPublished: boolean;
    timeLimit: string;
    randomizeQuestion: boolean;
    maxAttempts: number;
    fullMarks: number;
    questionList: QuizQuestion[];
}