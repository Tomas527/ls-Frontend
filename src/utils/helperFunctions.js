export function formatDate(dateString) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const dateObject = Date.parse(dateString);
  return Intl.DateTimeFormat("es-UN", options).format(dateObject);
}
