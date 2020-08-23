'use strict';

export default class SearchInput {
  constructor(form, errorMessages) {
    this._form = form;
    this._button = this._form.querySelector('.search__button');
    this._errorMessages = errorMessages;
  }

  _checkinputsValidity = (input) => {
    input.setCustomValidity("");

    if (input.validity.valueMissing) {
      input.setCustomValidity(this._errorMessages.emptyString);
      return false;
    }

    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(this._errorMessages.wrongLength);
      return false;
    }

    return input.checkValidity();
  }

  _isFieldValid = (input) => {
    const errorElem = this._form.querySelector(".search__error");
    const valid = this._checkinputsValidity(input);
    errorElem.textContent = input.validationMessage;

    return valid;
  }

  setSubmitButtonState(button, state) {
    if (state) {
      this._button.removeAttribute('disabled');
    } else {
      this._button.setAttribute('disabled', true);
    }
  }

  setEventListeners() {
    this._form.addEventListener('input', (event) => {

      const [...inputs] = this._form.querySelectorAll('.search__input');

      this._isFieldValid(event.target);

      this.setSubmitButtonState(this._button, inputs.every(this._checkinputsValidity));
    });
  }
}
