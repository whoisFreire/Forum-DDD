import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { EditAnswerUseCase } from './edit-answer'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

let inMemoryRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase

describe('Edit Answer', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryAnswersRepository()
    sut = new EditAnswerUseCase(inMemoryRepository)
  })

  it('should be able to edit a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )
    await inMemoryRepository.create(newAnswer)

    await sut.execute({
      answerId: newAnswer.id.toString(),
      authorId: 'author-1',
      content: 'Updated Content',
    })

    expect(inMemoryRepository.items[0]).toMatchObject({
      content: 'Updated Content',
    })
  })

  it('should not be able to edit a answer from another author', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )
    await inMemoryRepository.create(newAnswer)

    await expect(
      sut.execute({
        answerId: newAnswer.id.toString(),
        authorId: 'author-2',
        content: 'Updated Content',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
