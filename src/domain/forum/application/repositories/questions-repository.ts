import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  findById(questionId: string): Promise<Question | null>
  Create(question: Question): Promise<void>
  findBySlug(slug: string): Promise<Question | null>
  delete(question: Question): Promise<void>
}
