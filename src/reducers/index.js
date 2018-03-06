import {
  combineReducers
} from 'redux-immutable';
import info from './info';
import todos from './todos';

const appReducer = combineReducers({
  info,
  todos
});


export default (prevState, action) => {
  return appReducer(prevState, action);
};
