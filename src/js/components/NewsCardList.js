'use strict';

export default class NewsCardList { //Класс списка карточек новостей
  constructor(container, createCard, searchButton, template, patternCardDate) {
    this._page = 0;
    this._click = 1;
    this._container = container;
    this._createCard = createCard;
    this._template = template;
    this._searchButton = searchButton;
    this.patternCardDate = patternCardDate;
  }

  addCard = (list) => {
    this._list = list;

    this._renderCard();
  }

  _showCard = () => {
    this._page++;
    this._renderCard();
    this._setSubmitButtonState();
  }

  _setSubmitButtonState = () => {
    this._click++;

    if (this._click * 3 >= this._list.length) {
      this._searchButton.classList.add('hidden');
    } else {
      this._searchButton.classList.remove('hidden');
    }
  }

  _renderCard = () => {
    const listRender = this._list.slice(this._page * 3, (this._page + 1) * 3);

    listRender.forEach(item => {

      const card = this._createCard(item, this._template, this.patternCardDate);

      this._container.append(card);
    })

  }

  addEventListeners() {
    this._searchButton.addEventListener('click', () => {
      this._showCard();
    })
  }
}
