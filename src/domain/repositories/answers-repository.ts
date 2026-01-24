import { Answer } from "../entities/answer";

export interface AnswersRepository{
  Create(answer: Answer): Promise<void>;
}