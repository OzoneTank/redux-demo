import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

let id = 0;

const INITIAL_STATE = Immutable.fromJS({
  todos: []
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.updateIn(['todos'], (todos) => {
        return todos.push(Immutable.fromJS({
          id: id++,
          message: action.payload.message
        }));
      });

    case actionTypes.REMOVE_TODO:
      return state.set('todos',
        state.get('todos')
          .filter(o => o.get('id') !== action.payload.id)
      );

    default:
      return state;
  }
}

export default reducer;
