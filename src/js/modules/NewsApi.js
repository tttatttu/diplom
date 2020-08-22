'use strict';

export default class NewsApi { //Отвечает за взаимодействие с NewsAPI.
  constructor(config, currentDate, oneWeekAgoDate) {
    this._apiURL = config.apiURL;
    this._apiKey = config.apiKey;
    this._languige = config.apiLanguige;
    this._pageSize = config.apiPage;
    this._currentDate = currentDate;
    this._oneWeekAgoDate = oneWeekAgoDate;
  }

  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getNews = (word) => {
    return fetch(
        `${this._apiURL}?` +
        `q=${word}&` +
        `apiKey=${this._apiKey}&` +
        `to=${this._currentDate()}&` +
        `from=${this._oneWeekAgoDate(this._currentDate)}&` +
        `language=${this._languige}&` +
        `pageSize=${this._pageSize}`
      )
      .then(res => this._getResponseData(res))
  }
}
