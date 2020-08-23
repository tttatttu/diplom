"use strict";

import "./about.css";
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

const gitCardsContainer = document.querySelector(".swiper-slide");
const gitCardTemplate = gitCardsContainer.querySelector('#cardgit-template').content.querySelector(".history__template");
const githubApi = new GithubApi(GITHUB_API_CONFIG);
const commitCard = (...arg) => new CommitCard(...arg).create();
const commitCardList = new CommitCardList(gitCardsContainer, commitCard, gitCardTemplate, patternCardDate);
const storage = new DataStorage();

function initSwiper() {
  new Swiper(".swiper-container", {

    direction: "horizontal",
    effect: "slide",

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    loop: true,
    grabCursor: true,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

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
