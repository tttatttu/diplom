'use strict';

export default class AnalyticsCard {
  constructor(item, index, templateDate) {
    this._templateDate = templateDate.cloneNode(true);
    this._data = this._templateDate.querySelector(".tabel__data");
    this._signature = this._templateDate.querySelector(".tabel__signature");
    this._figure = this._templateDate.querySelector(".tabel__line");
    this._item = item;
    this._index = index;
  }

  create() {
    this._data.textContent = this._item;
    this._signature.textContent = this._index + '%';
    this._figure.style.width = `${this._index}%`;

    return this._templateDate;
  }
}
