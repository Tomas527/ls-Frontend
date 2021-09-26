export function formatDate(dateString) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const dateObject = Date.parse(dateString);
  return Intl.DateTimeFormat("es-UN", options).format(dateObject);
}

export function authCardUserIconPath() {
  const randomNum = Math.random() * 2;
  if (randomNum === 1) {
    return "assets/male-icon.png";
  } else {
    return "assets/female-icon.png";
  }
}
