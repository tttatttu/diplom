'use strict';

export default class Preloader { //Включение-отключение прелоэдера
  constructor(bodyContainer) {
    this._bodyContainer = bodyContainer;
    this._waitingContainer = this._bodyContainer.querySelector(".search-waiting");
    this._errorContiner = this._bodyContainer.querySelector(".search-error");
    this._newsContainer = this._bodyContainer.querySelector(".news");
  }

  toggleSearchContainer = (state) => {
    state ?
      this._bodyContainer.classList.add('hidden') :
      this._bodyContainer.classList.remove('hidden');
  }

  toggleWaitingContainer = (state) => {
    state ?
      this._waitingContainer.classList.add('hidden') :
      this._waitingContainer.classList.remove('hidden');
  }

  toggleErrorContiner = (state) => {
    state ?
      this._errorContiner.classList.add('hidden') :
      this._errorContiner.classList.remove('hidden');
  }

  toggleNewsContainer = (state) => {
    state ?
      this._newsContainer.classList.add('hidden') :
      this._newsContainer.classList.remove('hidden');
  }
}
