import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = Immutable.fromJS({
  info: {
    done: 0,
    created: 0
  }
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.RESET_INFO:
      return state.update('info', (info) => {
        return Immutable.fromJS({
          done: 0,
          created: 0
        });
      });

    case actionTypes.ADD_TODO:
      return state.update('info', (info) => {
        return info.set('created', info.get('created') + 1);
      });

    case actionTypes.REMOVE_TODO:
      return state.update('info', (info) => {
        return info.set('done', info.get('done') + 1);
      });

    default:
      return state;
  }
}

export default reducer;
