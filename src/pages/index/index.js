"use strict";

import "./index.css";

import {
  ERROR_MESSAGES
} from "../../js/constants/ERROR_MESSAGES";
import {
  NEWS_API_CONFIG
} from "../../js/constants/NEWS_API_CONFIG";
import {
  patternCardDate
} from '../../js/utils/patternCardDate';
import {
  currentDate
} from '../../js/utils/currentDate';
import {
  oneWeekAgoDate
} from '../../js/utils/oneWeekAgoDate';
import NewsApi from "../../js/modules/NewsApi";
import NewsCard from '../../js/components/NewsCard';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';
import Preloader from '../../js/components/Preloader';
import SearchInput from '../../js/components/SearchInput';

const containerCards = document.querySelector(".news__cards");
const searchButton = document.querySelector(".news__button");
const template = document.querySelector('#cardlist-template').content.querySelector(".news__card");
const searchContainer = document.querySelector(".content__body");
const formSearch = document.querySelector(".search__field");
const inputWord = formSearch.querySelector(".search__input");

const newsApi = new NewsApi(NEWS_API_CONFIG, currentDate, oneWeekAgoDate);
const createCard = (...arg) => new NewsCard(...arg).create();
const newsCardList = new NewsCardList(containerCards, createCard, searchButton, template, patternCardDate);
const storage = new DataStorage();
const preloader = new Preloader(searchContainer);
const searchInput = new SearchInput(formSearch, ERROR_MESSAGES, searchNews);

// поиск новостей по ключевому слову
function searchNews(word) {

  preloader.toggleWaitingContainer();
  preloader.toggleErrorContiner(true);

  newsApi.getNews(word)
    .then((res) => {
      storage.setDataNews(res["articles"]);
      // inputWord.value = storage.setDataWord('dataWord');

    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
      searchInput.setSubmitButtonState(true);
      preloader.toggleSearchContainer(true);
    })

    .then(() => {
      const items = storage.getDataNews();

      searchContainer.querySelector(".news__cards").innerHTML = '';
      newsCardList.addCard(items);

      preloader.toggleWaitingContainer(true);
      preloader.toggleErrorContiner(true);
      preloader.toggleNewsContainer();

      if (items.length === 0) {
        preloader.toggleNewsContainer(true);
        preloader.toggleErrorContiner();
      }
    });
    event.preventDefault();
    formSearch.reset();
}

searchInput.setEventListeners();

// Получаем ключевое слово для поиска новостей
formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  preloader.toggleSearchContainer();

  const keyWord = inputWord.value;

  storage.setDataWord(keyWord);

  searchNews(keyWord);
})

// Отрисовывает 3 карточки, если в хранилище они есть
document.addEventListener('DOMContentLoaded', function () {

  if (storage.getDataNews() && storage.getDataNews() !== "0") {

    preloader.toggleSearchContainer();
    preloader.toggleNewsContainer();

    newsCardList.addEventListeners();
    newsCardList.addCard(storage.getDataNews());
  }
  return true;
}, false);
