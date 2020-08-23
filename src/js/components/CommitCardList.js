'use strict';

export default class CommitCardList { //Класс списка карточек коммитов на странице «О проекте».
  constructor(container, commitCard, gitCardTemplate, patternCardDate) {
    this._container = container;
    this._commitCard = commitCard;
    this._gitCardTemplate = gitCardTemplate;
    this._patternCardDate = patternCardDate;
  }

  render = (item) => {

    const card = this._commitCard(item, this._gitCardTemplate, this._patternCardDate);

    this._container.append(card);
  }
}
