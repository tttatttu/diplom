export const createWeeks = () => { //получаем дни за прошедшую неделю
  const dates = [];
  const date = new Date();
  const today = date.getDate();
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  for (let i = 0; i < 7; i++) {

    date.setDate(today - i);

    const str = date.getDate() + ', ' + (days[date.getDay()]);
    dates.unshift(str);
  }
  return dates;
}
