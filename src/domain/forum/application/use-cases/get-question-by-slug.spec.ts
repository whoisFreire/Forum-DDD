import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

let inMemoryRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question by Slug', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityId('author-1'),
      title: 'Sample Question',
      content: 'This is a sample question content',
      slug: Slug.create('sample-question'),
    })

    await inMemoryRepository.Create(newQuestion)

    const { question } = await sut.execute({
      slug: 'sample-question',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })
})
