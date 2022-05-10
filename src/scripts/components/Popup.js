﻿import { popupSelectors } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(popupSelectors.popupOpenedClass);
    this._seteventListeners();
  }

  close() {
    this._popup.classList.remove(popupSelectors.popupOpenedClass);
    this._removeEventListeners();
  }

  _seteventListeners() {
    /*
      querySelector() используется внутри класса
      т.к. у каждого попапа свои элементы
    */
    this._popup
      .querySelector(popupSelectors.popupCloseButtonSelector)
      .addEventListener('click', () => {
        this.close();
      });

    this._popup
      .querySelector(popupSelectors.popupBackdropSelector)
      .addEventListener('click', () => {
        this.close();
      });

    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
}
