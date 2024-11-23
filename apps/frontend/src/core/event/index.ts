import Event from "./model/Event";
import Quest from "./model/Quest";

import completeQuest from "./functions/completeQuest";
import completeEvent from "./functions/completeEvent";
import createEmptyGuest from "./functions/createEmptyGuest";
import createEmptyEvent from "./functions/createEmptyEvent";

export type { Event, Quest };
export {
  completeQuest,
  completeEvent,
  createEmptyGuest,
  createEmptyEvent,
};
