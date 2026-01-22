import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const sut = new AnswerQuestionUseCase()

  const answer = sut.execute({
    instructorId: 'instructor-1',
    questionId: 'question-1',
    content: 'This is an answer'
  })
  
  expect(answer.content).toEqual('This is an answer')
})