'use strict';

export default class NewsCard { //Класс карточки новости
  constructor(item, template, patternCardDate) {
    this._item = item;
    this._template = template.cloneNode(true);
    this._link = this._template.querySelector(".news__page");
    this._images = this._template.querySelector(".news__images");
    this._data = this._template.querySelector(".news__data");
    this._title = this._template.querySelector(".news__title");
    this._subtitle = this._template.querySelector(".news__subtitle");
    this._paragraph = this._template.querySelector(".news__paragraph");
    this._patternCardDate = patternCardDate;
  }

  create() {
    this._link.href = this._item.url;
    this._images.src = this._item.urlToImage;
    this._data.textContent = this._patternCardDate(this._item.publishedAt);
    this._title.textContent = this._item.title;
    this._subtitle.textContent = this._item.description;
    this._paragraph.textContent = this._item.source.name;

    return this._template;
  }
}
