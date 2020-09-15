"use strict";

import "./about.css";
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/bundle";
import GithubApi from '../../js/modules/GithubApi';
import CommitCard from '../../js/components/CommitCard';
import CommitCardList from '../../js/components/CommitCardList';
import DataStorage from '../../js/modules/DataStorage';
import {
  GITHUB_API_CONFIG
} from '../../js/constants/GITHUB_API_CONFIG';
import {
  patternCardDate
} from '../../js/utils/patternCardDate';

const gitCardsContainer = document.querySelector(".swiper__wrapper");
const gitCardTemplate = gitCardsContainer.querySelector('#cardgit-template').content;
const githubApi = new GithubApi(GITHUB_API_CONFIG);
const commitCard = (...arg) => new CommitCard(...arg).create();
const commitCardList = new CommitCardList(gitCardsContainer, commitCard, gitCardTemplate, patternCardDate);
const storage = new DataStorage();

function initSwiper() {
  new Swiper(".swiper__container", {

    loop: true,
    slideClass: 'swiper__slide',
    wrapperClass: 'swiper__wrapper',

    pagination: {
      el: '.swiper__pagination',
      bulletActiveClass: 'swiper__pagination-bullet_active',
      bulletClass: 'swiper__pagination-bullet',
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper__button_next',
      prevEl: '.swiper__button_prev',
    },

    containerModifierClass: 'swiper__container',
    slideClass: 'history__slider',

    grabCursor: true,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 8,
    centeredSlides: true,

    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 8,
        centeredSlides: true,
        loop: false,
      },
      450: {
        slidesPerView: "auto",
        spaceBetween: 8,
        centeredSlides: false,
      },
      640: {
        slidesPerView: "auto",
        spaceBetween: 8,
        centeredSlides: false,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
        centeredSlides: true,
      },
    }
  })
};

githubApi.getCommits()
  .then((res) => {

    storage.setDataGitCards(res);

    const items = storage.getDataGitCards();

    items.forEach((item) => {
      commitCardList.render(item);
    })
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  .then(() => {
    initSwiper();
  });
