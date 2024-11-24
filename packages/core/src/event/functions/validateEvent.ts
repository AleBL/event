import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.alias) {
    errors.push("Alias is mandatory");
  }

  if (!event.name) {
    errors.push("Name is mandatory");
  }

  if (!event.description) {
    errors.push("Description is mandatory");
  }

  if (!event.date) {
    errors.push("Date is mandatory");
  }

  if (!event.local) {
    errors.push("Local is mandatory");
  }

  if (!event.expectedAudience || event.expectedAudience < 1) {
    errors.push("Expected audience is mandatory");
  }

  if (!event.image) {
    errors.push("Image is mandatory");
  }

  if (!event.imageBackground) {
    errors.push("Image background is mandatory");
  }

  return errors;
}
