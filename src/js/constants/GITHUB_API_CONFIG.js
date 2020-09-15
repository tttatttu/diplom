const serverGitUrl = NODE_ENV === 'development' ? 'http://api.github.com' : 'https://api.github.com';

export const GITHUB_API_CONFIG = {
  apiURL: serverGitUrl,
  user: 'tttatttu',
  reposName: 'news_analyzer',
  perPage: '20',
}
