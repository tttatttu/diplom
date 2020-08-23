"use strict";

import "./analytics.css";
import DataStorage from '../../js/modules/DataStorage';
import AnalyticsCard from '../../js/components/AnalyticsCard';
import AnalyticsCardList from '../../js/components/AnalyticsCardList';
import {
  Statistics
} from '../../js/components/Statistics';
import {
  createWeeks
} from '../../js/utils/createWeeks';
import {
  getMonth
} from '../../js/utils/getMonth';

const searchTitle = document.querySelector(".search__title");
const news = document.querySelector("#totalNews");
const title = document.querySelector("#totalTitle");
const templateDate = document.querySelector('#analytics-template').content.querySelector(".tabel__day");
const tabelSection = document.querySelector(".tabel");
const containerDates = document.querySelector(".tabel__days");

const storage = new DataStorage();
const items = storage.getDataNews();
const word = storage.getDataWord();
const statistics = new Statistics(tabelSection, items, word);
const createDate = (...arg) => new AnalyticsCard(...arg).create();
const analyticsCardList = new AnalyticsCardList(containerDates, createDate, templateDate);

function createStatistics() {

  statistics.toggTabel();

  const countRepeats = statistics.countDates();

  createWeeks().forEach((day, index) => {

    analyticsCardList.render(day, countRepeats[day.match(/\d{1,2}/) + 'T'] || 0);
  })

}
createStatistics();

// отдаем месяц в шапку таблицы
function tableHeaderMonth() {
  const tableMonth = document.querySelector(".tabel__month");
  tableMonth.textContent = getMonth();
}
tableHeaderMonth();

// упоминаний в заголовках
function repeatWors() {

  searchTitle.textContent = "Вы спросили: " + "«" + word + "»";
  news.textContent = items.length;
  title.textContent = statistics.total();
}
repeatWors();
