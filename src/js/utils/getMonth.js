export const getMonth = () => {

  const date = new Date();
  const month = date.getMonth();

  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

  return 'Дата' + '  ' + '(' + months[month] + ')';
}
