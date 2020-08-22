'use strict';

export default class DataStorage { //класс для работы с локальным хранилищем браузера.
  constructor() {

  }

  setDataNews = (data) => {
    localStorage.setItem('cards', JSON.stringify(data));
  }

  setDataWord = (word) => {
    localStorage.setItem('dataWord', JSON.stringify(word));
  }

  setDataGitCards = (data) => {
    localStorage.setItem('gitCards', JSON.stringify(data));
  }

  getDataNews = () => {
    return JSON.parse(localStorage.getItem('cards'));
  }

  getDataWord = () => {
    return JSON.parse(localStorage.getItem('dataWord'));
  }

  getDataGitCards = () => {
    return JSON.parse(localStorage.getItem('gitCards'));
  }

  clearStorage() {
    localStorage.clear();
  }
}
