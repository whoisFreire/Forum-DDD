import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(override: Partial<QuestionProps> = {}): Question {
  const question = Question.create({
    authorId: new UniqueEntityId('author-1'),
    title: 'Sample Question',
    content: 'This is a sample question content',
    ...override,
  })

  return question
}
