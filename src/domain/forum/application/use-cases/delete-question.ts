import { QuestionsRepository } from '../repositories/questions-repository'

type DeleteQuestionUseCaseRequest = {
  authorId: string
  questionId: string
}

type DeleteQuestionUseCaseResponse = object

export class DeleteQuestionUseCase {
  constructor(private readonly repository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.repository.findById(questionId)
    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.repository.delete(question)
    return {}
  }
}
