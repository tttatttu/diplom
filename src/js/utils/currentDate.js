export const currentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ((date.getMonth() + 1 + '').length === 1) ? '0' + ((date.getMonth() + 1)) : (date.getMonth() + 1);
  const day = date.getDate().length === 1 ? '0' + date.getDate() : date.getDate();
  return `${year}-${month}-${day}`
}
