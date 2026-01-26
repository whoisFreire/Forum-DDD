import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryRepository)
  })

  it('should be able to create a question', async () => {
    const result = await sut.execute({
      authorId: 'author-1',
      title: 'Sample Question',
      content: 'This is a sample question content',
      attachmentsIds: ['att-1', 'att-2'],
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryRepository.items[0]).toEqual(result.value?.question)
    expect(inMemoryRepository.items[0].attachments).toHaveLength(2)
    expect(inMemoryRepository.items[0].attachments).toEqual([
      expect.objectContaining({ attachmentId: new UniqueEntityId('att-1') }),
      expect.objectContaining({ attachmentId: new UniqueEntityId('att-2') }),
    ])
  })
})
