# Проект: Место 🗺

Четвертая проектная работа для Яндекс.Практикума

> Результат [опубликован](https://eoneof-yap.github.io/mesto/) на хостинге GitHub Pages

## Описание

Интерактивная страница, где можно просматривать, добавлять и удалять фотографии, ставить им лайки.

На этот раз макет был упрощен, что потрбовало самостоятельно придумывать названия и вложенность блоков, и разработать вид страницы в промежуточных брейкпоинтах.

Работа ка разбита на несколько спринтов. Каждый охватывает несколько новых тем в веб-разработке, которые нужно применить в текущей итерации.

## Часть первая

Всё как в первых трёх работах + базовый `javascript`. Необходимо было сверстать страницу по макету и рализовать открытие попапа по нажатии на кнопку и отобразить введенные данные на странице.

### Темы спринта

**HTML**

- Семантическая верстка
  - Использование своих классов

**CSS**

- Использование `css flexbox`, построение сеток
  - `css grid`
  - Медиазапросы `@media`
  - Подключение несистемных шрифтов

**JAVASCRIPT**

- Работа с DOM
- Обработка событий на странице

## Часть вторая

В макете появились новые элементы: форма добавления фотографий, попап с предпросмотром, корзина на карточке.

На странице добавилось интерактивности, что потребовало переписать часть логики из предыдущего спринта и добавить новую.

### Темы спринта

**HTML**

- Использование `HTML template`

**CSS**

- Плавное появление и затухание всплывающих элементов страницы

**JAVASCRIPT**

- Работа с массивами
- Клонирование узлов HTML
- Обработка событий от множества подобных элементов
  - Делегирование обработчиков событий

## Часть третья

С помощью JS нужно проверить корректность введенных данных перед отправкой.

### Темы спринта

**JAVASCRIPT**

- Объекты JS
- Валидация форм
  - Работа со встроенными браузерной валидацией через JS

### Планы по доработке

- В некоторых местах `index.js` и `validate.js` пересекаются функционалом, например запрашивают одни и те же эдементы для разных задач. Надо это как-то объединить.
- Передавать параметры с помощью операторов `spread` и `rest`, а не через конструкцию `object.key`

## Технологии

Выполнение задания включает в себя:

- Использование методологии [БЭМ](https://bem.info)
- Работа с распределенной системой управления версиями `git` (на примере GitHub)
  - Работа с ветками `git`
  - Публикация на GitHub Pages
  - Применение правил соглашения [Conventional Commits](https://www.conventionalcommits.org/ru/v1.0.0-beta.4)
- Работа с макетом в Figma
- Работа с документацией ([MDN](https://developer.mozilla.org/))
- Много думать
- Гуглёж
