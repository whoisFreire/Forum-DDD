import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

type AnswerAttachmentProps = {
  quesitonId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get answerId() {
    return this.props.quesitonId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
    return new AnswerAttachment(props, id)
  }
}
