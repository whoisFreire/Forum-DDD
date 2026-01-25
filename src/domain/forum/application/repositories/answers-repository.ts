import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>
  Create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
