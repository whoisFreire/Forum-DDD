import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

type DeleteQuestionCommentUseCaseRequest = {
  authorId: string
  questionCommentId: string
}

type DeleteQuestionCommentUseCaseResponse = object

export class DeleteQuestionCommentUseCase {
  constructor(private readonly repository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment = await this.repository.findById(questionCommentId)
    if (!questionComment) {
      throw new Error('Question comment not found.')
    }

    if (authorId !== questionComment.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.repository.delete(questionComment)
    return {}
  }
}
