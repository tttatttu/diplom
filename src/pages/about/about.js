"use strict";

import "./about.css";

import Swiper from "swiper/bundle";

const mySwiper = new Swiper(".swiper-container", {

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
