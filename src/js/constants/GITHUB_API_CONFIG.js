const serverGitUrl = NODE_ENV === 'development' ? 'https://api.github.com' : 'http://api.github.com';

export const GITHUB_API_CONFIG = {
  apiURL: serverGitUrl,
  user: 'tttatttu',
  reposName: 'diplom',
  perPage: '20',
}
