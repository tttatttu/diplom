'use strict';

export class Statistics { //Класс, отвечающий за логику работы графиков со статистикой на странице аналитики.
  constructor(tabelSection, items, word) {
    this._tabelSection = tabelSection;
    this._items = items;
    this._word = word;
  }

  toggTabel = (state) => {
    state ?
      this._tabelSection.classList.add('hidden') :
      this._tabelSection.classList.remove('hidden');
  }

  _counter = () => {
    return this._items.reduce((acc, data) => {
      const keyWord = new RegExp(this._word, 'g');
      const repeats = ((data.description + data.title || '').match(keyWord) || []).length;
      acc[data.publishedAt.match(/\d{1,2}T/)] = (acc[data.publishedAt.match(/\d{1,2}T/)] || 0) + repeats;

      return acc;
    }, {});
  }

  total = () => {
    const counter = this._counter();
    let sum = 0;
    for (let key of Object.keys(counter)) {
      sum += counter[key];
    }

    return sum;
  }

  getObject = (counter, total) => {
    const newObj = counter;
    for (let prop in newObj) {
      newObj[prop] = Math.round(newObj[prop] * 100 / total);
    }

    return newObj;
  }

  countDates = () => {
    const counter = this._counter();
    this.total(counter);
    this.getObject(counter, this.total(counter));

    return counter;
  }
}
