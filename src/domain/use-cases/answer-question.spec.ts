import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  Create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const sut = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await sut.execute({
    instructorId: 'instructor-1',
    questionId: 'question-1',
    content: 'This is an answer',
  })

  expect(answer.content).toEqual('This is an answer')
})
