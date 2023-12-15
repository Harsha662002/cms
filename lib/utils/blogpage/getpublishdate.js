function formatDate(inputDate) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
}

export default formatDate;
