import { Id } from "@/core/shared";
import Quest from "../model/Quest";

export default function createEmptyGuest(): Partial<Quest> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanions: false,
    countCompanions: 0,
  };
}
