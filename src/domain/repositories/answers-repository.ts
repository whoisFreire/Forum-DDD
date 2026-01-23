import { Answer } from "../entities/Answer";

export interface AnswersRepository{
  Create(answer: Answer): Promise<void>;
}