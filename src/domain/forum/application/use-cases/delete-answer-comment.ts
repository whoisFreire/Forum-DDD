import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

type DeleteAnswerCommentUseCaseRequest = {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<string, object>

export class DeleteAnswerCommentUseCase {
  constructor(private readonly repository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.repository.findById(answerCommentId)
    if (!answerComment) {
      return left('Answer comment not found.')
    }

    if (authorId !== answerComment.authorId.toString()) {
      return left('Not allowed.')
    }

    await this.repository.delete(answerComment)
    return right({})
  }
}
