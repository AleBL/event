import Quest from "../model/Quest";

export default function validateQuest(
  quest: Partial<Quest>
): string[] {
  const errors: string[] = [];

  if (!quest.name) {
    errors.push("Nome é obrigatório");
  }

  if (!quest.email) {
    errors.push("E-mail é obrigatório");
  }

  return errors;
}
