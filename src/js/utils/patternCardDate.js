export const patternCardDate = (data) => {
  const date = new Date(data);

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  return `${day} ${months[month]}, ${year}`;
}
