const serverUrl = NODE_ENV === 'development' ? 'http://nomoreparties.co/news/v2/everything' : 'https://nomoreparties.co/news/v2/everything';

export const NEWS_API_CONFIG = {
  apiURL: serverUrl,
  apiKey: 'be0bd687815b45b695ec6bc59130f0f7',
  apiLanguige: 'ru',
  apiPage: '100',
}
