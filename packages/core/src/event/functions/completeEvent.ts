import { Id, Password } from "../../shared";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function completeEvent(
  partialEvent: Partial<Event>
): Event {
  const errors = validateEvent(partialEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.new(20),
    expectedAudience: +(partialEvent.expectedAudience ?? 1),
  } as Event;

  return event;
}
