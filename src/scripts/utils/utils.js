﻿import * as consts from './constants.js';
import {
  api,
  popupUpdate,
  popupEdit,
  popupAdd,
  popupConfirm,
  user,
  pagePreloader,
  cardsContainer,
  profileElements,
} from '../../pages/index/index';

/************************************************************
 * Handlers
 ************************************************************/
export function handleUpdatePhotoButton() {
  consts.validators[consts.formSelectors.formUpdatePhotoID].resetValidation();
  popupUpdate.open(); // => PopupWithForm.js
}

export function handleEditProfileButton() {
  consts.validators[consts.formSelectors.formEditInfoID].resetValidation();
  popupEdit.setInputValues(user.pickUserInfo());
  popupEdit.open(); // => PopupWithForm.js
}

export function handleAddCardButton() {
  consts.validators[consts.formSelectors.formAddCardID].resetValidation();
  popupAdd.open();
}

export function handleDeleteCardButton() {
  popupConfirm.open();
}

/**
 * Edit user photo (avatar)
 */
export function handleUserPhotoSubmit(inputValue) {
  popupUpdate.displayLoader();
  api
    .setAvatar(inputValue)
    .then((res) => {
      user.updateUserProfilePhoto(res.avatar);
    })
    .then((res) => {
      popupUpdate.hideLoader();
      popupUpdate.close();
    })
    .catch((err) => console.warn(`Произошла непоправимая ошибка: ${err}`));
}

/**
 * Edit user info
 */
export function handleUserInfoSubmit(inputValues) {
  popupEdit.displayLoader();
  api
    .setUser(inputValues)
    .then((res) => {
      user.editUserInfo(res);
    })
    .then((res) => {
      popupEdit.hideLoader();
      popupEdit.close();
    })
    .catch((err) => console.warn(`Произошла непоправимая ошибка: ${err}`));
}

/**
 * Add new card
 */
export function handleCardSubmit(inputValues) {
  const data = {
    name: inputValues.name,
    link: inputValues.link,
  };
  initialCardsList.renderSectionItem(data);
  popupAdd.close();
}

export function handleCardDeleteConfirm(target) {
  popupConfirm.close();
  api.deleteCard(carId).then();
}

export const mapCardsData = (arr) => {
  console.log('👉arr:', arr);
  return arr.map((item) => {
    return {
      likes: item.likes,
      id: item._id,
      name: item.name,
      link: item.link,
      owner: item.owner._id,
      createdAt: item.createdAt,
    };
  });
};

export const hidePagePreloader = () => {
  pagePreloader.classList.add('hidden');
  cardsContainer.classList.remove(consts.hiddenClass);
  profileElements.profileContainer.classList.remove(consts.hiddenClass);
};
