'use strict';

export default class AnalyticsCardList {
  constructor(containerDates, createDate, templateDate) {
    this._containerDates = containerDates;
    this._createDate = createDate;
    this._templateDate = templateDate;
  }

  render = (item, index) => {
    const card = this._createDate(item, index, this._templateDate);

    this._containerDates.append(card);
  }
}
