import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  Create: async (question: Question) => {},
}

test('create a question', async () => {
  const sut = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await sut.execute({
    authorId: 'author-1',
    title: 'Sample Question',
    content: 'This is a sample question content',
  })

  expect(question.id).toBeTruthy()
  expect(question.title).toEqual('Sample Question')
})
