import { Answer } from "../entities/Answer";

type AnswerQuestionUseCaseRequest = {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content);

    return answer;
  }
}