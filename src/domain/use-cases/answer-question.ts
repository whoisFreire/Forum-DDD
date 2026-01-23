import { Answer } from "../entities/Answer";
import { AnswersRepository } from "../repositories/answers-repository";

type AnswerQuestionUseCaseRequest = {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    });
    await this.answersRepository.Create(answer);
    return answer;
  }
}