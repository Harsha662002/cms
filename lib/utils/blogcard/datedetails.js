// TimeDifference.js
const calculateTimeDifference = (item) => {
  const postDate = new Date(item.fields.date);
  const currentDate = new Date();

  const secondsDifference = Math.floor((currentDate - postDate) / 1000);
  if (secondsDifference < 60) {
    return `${secondsDifference}s ago`;
  }

  const minutesDifference = Math.floor(secondsDifference / 60);
  if (minutesDifference < 60) {
    return `${minutesDifference}min ago`;
  }

  const hoursDifference = Math.floor(minutesDifference / 60);
  if (hoursDifference < 24) {
    return `${hoursDifference}h ago`;
  }

  const daysDifference = Math.floor(hoursDifference / 24);
  if (daysDifference < 7) {
    return `${daysDifference}d ago`;
  }

  const weeksDifference = Math.floor(daysDifference / 7);
  if (weeksDifference < 4) {
    return `${weeksDifference}w ago`;
  }

  const monthsDifference = Math.floor(daysDifference / 30);
  if (monthsDifference < 12) {
    return `${monthsDifference}mo ago`;
  }

  const yearsDifference = Math.floor(daysDifference / 365);
  return `${yearsDifference}y ago`;
};

export default calculateTimeDifference;
