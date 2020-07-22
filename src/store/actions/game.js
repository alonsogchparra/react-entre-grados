import * as actionTypes from '../actions/actionTypes';

export const addPhrase = (phrase) => ({
  type: actionTypes.ADD_PHRASE,
  phrase,
  isPhraseCreated: true
});

export const loadingResult = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.LOADING_GAME
      })
    }, 0);
  }
}

export const showGame = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.SHOW_GAME,
        isLoading: false
      })
    }, 2000)
  }
}

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
})