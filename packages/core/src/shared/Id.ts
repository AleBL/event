import { v4 } from "uuid";

export default class Id {
  static new(): string {
    return v4();
  }
}
