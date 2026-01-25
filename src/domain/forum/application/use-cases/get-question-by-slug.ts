import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

type GetQuestionBySlugUseCaseRequest = {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = {
  question: Question
}

export class GetQuestionBySlugUseCase {
  constructor(private repository: QuestionsRepository) {}

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.repository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found.')
    }

    return {
      question,
    }
  }
}
