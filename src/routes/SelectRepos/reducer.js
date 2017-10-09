import { selectRepos as types } from '../../actionTypes';

export const initialState = {
  watchedRepos: [],
  paginatedRepos: {
    currentPage: null,
    hasNextPage: null,
    hasPreviousPage: null,
    totalPages: 0,
    pages: {},
  },
  githubError: null,
  selectedRepos: [],
  repoFilterValue: null,
  reposPerPage: 50,
};

/* eslint-disable no-case-declarations */

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_WATCHED_REPOS_SUCCESS:
      const selectedRepos = state.selectedRepos.filter(repoId => {
        let result = false;
        for (const node of action.data) { // eslint-disable-line
          if (node.id === repoId) {
            result = true;
            break;
          }
        }
        return result;
      });

      return {
        ...state,
        watchedRepos: action.data,

        githubError: null,
        selectedRepos,
      };
    case types.PAGINATE_REPOS:
      let pages = {};
      let pageCount = 1;
      const watchedRepos = state.watchedRepos;
      while (watchedRepos.length > 0) {
        pages = {
          ...pages,
          [pageCount]: watchedRepos.splice(0, state.reposPerPage),
        };
        pageCount += 1;
      }

      return {
        ...state,
        paginatedRepos: {
          currentPage: 1,
          hasNextPage: pageCount > 2,
          hasPreviousPage: false,
          totalPages: pageCount - 1,
          pages,
        },
      };
    case types.CHANGE_REPOS_PAGE:
      return {
        ...state,
        paginatedRepos: {
          ...state.paginatedRepos,
          currentPage: action.page,
          hasNextPage: action.page < state.paginatedRepos.totalPages,
          hasPreviousPage: action.page > 1,
        },
      };
    case types.REQUEST_WATCHED_REPOS_FAIL:
      return {
        ...state,
        githubError: action.error,
      };
    case types.TOGGLE_REPO_SELECTION:
      return state.selectedRepos.includes(action.id)
        ? {
            ...state,
            selectedRepos: state.selectedRepos.filter(
              repoId => repoId !== action.id,
            ),
          }
        : {
            ...state,
            selectedRepos: [...state.selectedRepos, action.id],
          };
    case types.SAVE_REPO_FILTER_VALUE:
      return {
        ...state,
        repoFilterValue: action.value,
      };
    default:
      return state;
  }
}
