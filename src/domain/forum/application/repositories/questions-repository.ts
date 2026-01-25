import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  Create(question: Question): Promise<void>
  findBySlug(slug: string): Promise<Question | null>
}
