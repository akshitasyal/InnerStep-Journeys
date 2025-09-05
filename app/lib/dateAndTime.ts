export function getLocalDateTime(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Format required by datetime-local input
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function localToISO(localDateTime: string): string {
  // localDateTime is like "2025-09-03T15:30"
  const date = new Date(localDateTime);
  return date.toISOString(); // convert to UTC ISO string
}
