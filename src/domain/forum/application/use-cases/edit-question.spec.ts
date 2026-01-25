import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { EditQuestionUseCase } from './edit-question'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

let inMemoryRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository()
    sut = new EditQuestionUseCase(inMemoryRepository)
  })

  it('should be able to edit a question', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )
    await inMemoryRepository.create(newQuestion)

    await sut.execute({
      questionId: newQuestion.id.toString(),
      authorId: 'author-1',
      content: 'Updated Content',
      title: 'Updated Title',
    })

    expect(inMemoryRepository.items[0]).toMatchObject({
      title: 'Updated Title',
      content: 'Updated Content',
    })
  })

  it('should not be able to edit a question from another author', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )
    await inMemoryRepository.create(newQuestion)

    await expect(
      sut.execute({
        questionId: newQuestion.id.toString(),
        authorId: 'author-2',
        content: 'Updated Content',
        title: 'Updated Title',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
