import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

type QuestionAttachmentProps = {
  quesitonId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.quesitonId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEntityId) {
    return new QuestionAttachment(props, id)
  }
}
