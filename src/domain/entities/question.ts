import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/value-objects/unique-entity-id";

type QuestionProps = {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  slug: Slug;
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {}