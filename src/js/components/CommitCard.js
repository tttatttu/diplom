'use strict';

export default class CommitCard { //Класс карточки новости для карточек коммитов на странице «О проекте»
  constructor(item, gitCard, patternCardDate) {
    this._item = item;
    this._gitCard = gitCard;
    this._gitCard = this._gitCard.cloneNode(true);
    this._data = this._gitCard.querySelector(".history__data");
    this._avatar = this._gitCard.querySelector(".history__image");
    this._title = this._gitCard.querySelector(".history__title");
    this._mail = this._gitCard.querySelector(".history__mail");
    this._subtitle = this._gitCard.querySelector(".history__subtitle");
    this._card = this._gitCard.querySelector(".history__card");
    this._patternCardDate = patternCardDate;

  }

  create() {
    this._data.textContent = this._patternCardDate(this._item.commit.committer.date);
    this._avatar.src = this._item.author.avatar_url;
    this._title.textContent = this._item.commit.committer.name;
    this._mail.textContent = this._item.commit.committer.email;
    this._subtitle.textContent = this._item.commit.message;
    this._card.href = this._item.html_url;

    return this._gitCard;
  }
}
