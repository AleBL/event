export default class EventDate {
  static toString(eventDate: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const date = eventDate ?? new Date();
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  static parse(dateString: string): Date {
    const [year, month, day] = dateString.split("T")[0].split("-");
    const [hour, minute] = dateString.split("T")[1].split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}
