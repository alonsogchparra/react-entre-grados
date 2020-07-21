import * as actionTypes from '../actions/actionTypes';
import { slugify } from '../../tools/RemoveAccents';

const initState = {
  answer: '',
  answerCopy: '',
  isPhraseCreated: false,
  isLoading: true
}

export default (state = initState, action) => {

  switch(action.type) {

    case actionTypes.ADD_PHRASE:
      return {
        ...state,
        answer: slugify(action.phrase),
        answerCopy: action.phrase,
        isPhraseCreated: action.isPhraseCreated,
        isLoading: true
      }

    case actionTypes.SHOW_GAME:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case actionTypes.RESET_GAME:
      return {
        ...state,
        answer: '',
        answerCopy: '',
        isPhraseCreated: false,
        isLoading: true
      }

    default:
      return state;

  }

}