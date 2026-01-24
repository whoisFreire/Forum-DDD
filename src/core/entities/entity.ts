import { randomUUID } from "node:crypto"

export class Entity<T> {
  private _id: string
  protected props: T

  protected constructor(props: T, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }

  get id() {
    return this._id
  }
}