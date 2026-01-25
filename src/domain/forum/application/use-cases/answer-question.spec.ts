import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryRepository)
  })

  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      instructorId: 'instructor-1',
      questionId: 'question-1',
      content: 'This is an answer',
    })

    expect(answer.content).toEqual('This is an answer')
  })
})
