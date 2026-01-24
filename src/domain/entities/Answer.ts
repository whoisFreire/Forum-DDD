import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/value-objects/unique-entity-id";

type AnswerProps = {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  
}

export class Answer  extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}