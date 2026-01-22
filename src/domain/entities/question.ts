import { randomUUID } from "node:crypto"

type QuestionProps = {
  title: string
  content: string
  authorId: string
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor({title, content, authorId}: QuestionProps, id?: string) {
    this.id = id ?? randomUUID()
    this.title = title
    this.content = content
    this.authorId = authorId
  }
}