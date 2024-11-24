import { v4, validate } from "uuid";

export default class Id {
  static new(): string {
    return v4();
  }

  static valid(id: string): boolean {
    return validate(id);
  }
}
