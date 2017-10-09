export const home = {
  REQUEST_CURRENT_USER: 'REQUEST_CURRENT_USER',
  REQUEST_CURRENT_USER_SUCCESS: 'REQUEST_CURRENT_USER_SUCCESS',
  REQUEST_CURRENT_USER_FAIL: 'REQUEST_CURRENT_USER_FAIL',
  REQUEST_PULL_REQUESTS: 'REQUEST_PULL_REQUESTS',
  REQUEST_PULL_REQUESTS_LOADING: 'REQUEST_PULL_REQUESTS_LOADING',
  REQUEST_PULL_REQUESTS_SUCCESS: 'REQUEST_PULL_REQUESTS_SUCCESS',
  REQUEST_PULL_REQUESTS_FAIL: 'REQUEST_PULL_REQUESTS_FAIL',
  TOGGLE_OPEN_REPO: 'TOGGLE_OPEN_REPO',
};

export const login = {
  SAVE_GITHUB_CREDENTIALS: 'SAVE_GITHUB_CREDENTIALS',
  REQUEST_GITHUB_TOKEN: 'REQUEST_GITHUB_TOKEN',
  REQUEST_GITHUB_TOKEN_SUCCESS: 'REQUEST_GITHUB_TOKEN_SUCCESS',
  REQUEST_GITHUB_TOKEN_FAILURE: 'REQUEST_GITHUB_TOKEN_FAILURE',
  SAVE_REDIRECT: 'SAVE_REDIRECT',
};

export const selectRepos = {
  REQUEST_WATCHED_REPOS: 'REQUEST_WATCHED_REPOS',
  REQUEST_WATCHED_REPOS_SUCCESS: 'REQUEST_WATCHED_REPOS_SUCCESS',
  REQUEST_WATCHED_REPOS_FAIL: 'REQUEST_WATCHED_REPOS_FAIL',
  TOGGLE_REPO_SELECTION: 'TOGGLE_REPO_SELECTION',
  SAVE_REPO_FILTER_VALUE: 'SAVE_REPO_FILTER_VALUE',
  CHANGE_REPOS_PAGE: 'CHANGE_REPOS_PAGE',
  PAGINATE_REPOS: 'PAGINATE_REPOS',
  FILTER_REPOS: 'FILTER_REPOS',
};

export const layout = {
  REHYDRATION_COMPLETE: 'REHYDRATION_COMPLETE',
};
