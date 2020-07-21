import gameReducer from './game';
import { combineReducers } from 'redux';

export default combineReducers({
  game: gameReducer
});