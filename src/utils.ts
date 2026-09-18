/**
 * Formats a Date object as a `YYYY-MM-DD` string.
 *
 * @param date - The date to format.
 * @returns The date formatted as `YYYY-MM-DD`.
 */
export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed (0 = January)
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}