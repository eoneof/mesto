﻿// DOC
const page = document.querySelector('.page');
const photoGrid = page.querySelector('.photo-grid');

// TEMPLATES
const cardTemplate = document.querySelector('#card-template').content;

// EDITABLES
const currentProfileName = page.querySelector('.profile__name');
const currentProfileInfo = page.querySelector('.profile__about');

// BUTTONS
const editProfileButton = page.querySelector('.profile__edit-button');
const addPhotoButton = page.querySelector('.profile__add-button');

// POPUPS
const editProfilePopup = page.querySelector('.popup_edit');
const addPhotoPopup = page.querySelector('.popup_add');
const previewPhotoPopup = page.querySelector('.popup_preview');

// FORMS
const editForm = page.querySelector('.form_edit');
const addForm = page.querySelector('.form_add');

// INPUTS
const newProfileName = editProfilePopup.querySelector('input[name="profile-name"]');
const newProfileInfo = editProfilePopup.querySelector('input[name="profile-about"]');
const newPhotoName = addPhotoPopup.querySelector('input[name="card-name"]');
const newPhotoLink = addPhotoPopup.querySelector('input[name="card-link"]');

// DATA
const initialCards = [
  {
    name: 'Пятигорск',
    link: '../images/pyatigorks.jpeg',
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/elbrus.jpeg',
  },
  {
    name: 'Домбай',
    link: '../images/dombay-mountains.jpeg',
  },
  {
    name: 'Домбай',
    link: '../images/dombay-yak.jpeg',
  },
  {
    name: 'Гора Машук',
    link: '../images/gora-mashuk.jpeg',
  },
  {
    name: 'Кабардино-Балкария',
    link: '../images/kabardino-balkariya.jpeg',
  },
];

// FUNCTIONS
function preventDefaultBehavior(evt) {
  evt.preventDefault();
}

function createCard(data) {
  let cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = data.name;
  cardElement.querySelector('.card__image').src = data.link;
  return cardElement;
}

function renderCard(data, container) {
  container.prepend(createCard(data));
}

// HANDLERS
function openEditProfilePopupHandler(evt) {
  preventDefaultBehavior(evt);
  newProfileName.value = currentProfileName.textContent;
  newProfileInfo.value = currentProfileInfo.textContent;
  editProfilePopup.classList.add('popup_opened');
  setTimeout(function () {
    // без таймаута не фокусируется после транзишена
    newProfileName.focus();
  }, 100);
}

function openAddPhotoPopupHandler(evt) {
  preventDefaultBehavior(evt);
  addPhotoPopup.classList.add('popup_opened');
  setTimeout(function () {
    // без таймаута не фокусируется после транзишена
    newPhotoName.focus();
  }, 100);
}

function editFormSubmitHandler(evt) {
  preventDefaultBehavior(evt);
  currentProfileName.textContent = newProfileName.value;
  currentProfileInfo.textContent = newProfileInfo.value;
  editProfilePopup.classList.remove('popup_opened');
}

function addFormSubmitHandler(evt) {
  preventDefaultBehavior(evt);
  let data = {};
  data.name = newPhotoName.value;
  data.link = newPhotoLink.value;
  renderCard(data, photoGrid);
  addPhotoPopup.classList.remove('popup_opened');
  evt.currentTarget.reset();
}

function openPhotoPreviewHandler(evt) {
  if (evt.target.classList.contains('card__image')) {
    previewPhotoPopup.querySelector('.preview__photo').src = evt.target.src;
    previewPhotoPopup.querySelector('.preview__caption').textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
    previewPhotoPopup.classList.add('popup_opened');
  }
}

function closePopupHandler(evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    evt.target.closest('.popup').classList.remove('popup_opened');
  } else {
    return;
  }
}

function toggleLikeHandler(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_active');
  }
}

function deletecardHandler(evt) {
  if (evt.target.classList.contains('card__delete-button')) {
    evt.target.closest('.card').remove();
  }
}

// LISTENERS
editProfileButton.addEventListener('click', openEditProfilePopupHandler);
editForm.addEventListener('submit', editFormSubmitHandler);

addPhotoButton.addEventListener('click', openAddPhotoPopupHandler);
addForm.addEventListener('submit', addFormSubmitHandler);

// один слушатель, чтобы править всеми
page.addEventListener('click', function (evt) {
  openPhotoPreviewHandler(evt);
  closePopupHandler(evt);
  deletecardHandler(evt);
  toggleLikeHandler(evt);
});

// показываем карточки по умолчанию
initialCards.forEach(function (card) {
  renderCard(card, photoGrid);
});
