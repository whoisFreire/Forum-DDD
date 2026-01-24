import { UniqueEntityId } from "./value-objects/unique-entity-id"

export class Entity<T> {
  private _id: UniqueEntityId
  protected props: T

  protected constructor(props: T, id?: string) {
    this._id = new UniqueEntityId(id)
    this.props = props
  }

  get id() {
    return this._id
  }
}