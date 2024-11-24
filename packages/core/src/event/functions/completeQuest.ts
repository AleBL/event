import Quest from "../model/Quest";
import validateQuest from "./validateQuest";

export default function completeQuest(
  quest: Partial<Quest>
): Quest {
  const errors = validateQuest(quest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const countCompanions = quest.countCompanions ?? 0;
  const hasCompanions =
    quest.hasCompanions &&
    quest.confirmed &&
    countCompanions > 0;

  const updatedQuest = {
    ...quest,
    countCompanions: hasCompanions ? countCompanions : 0,
    hasCompanions: hasCompanions,
  };

  return updatedQuest as Quest;
}
