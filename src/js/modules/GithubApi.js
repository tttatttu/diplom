'use strict';

export default class GithubApi { //отвечает за взаимодействие с Github.
  constructor(config) {
    this._perPage = config.perPage;
    this._apiURL = config.apiURL;
    this._user = config.user;
    this._reposName = config.reposName;
  }

  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getCommits = () => {
    return fetch(`${this._apiURL}/repos/${this._user}/${this._reposName}/commits?per_page=${this._perPage}`, {
        method: 'GET',
      })
      .then(res => this._getResponseData(res));
  }
}
