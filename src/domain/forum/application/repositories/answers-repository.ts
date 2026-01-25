import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  Create(answer: Answer): Promise<void>
}
