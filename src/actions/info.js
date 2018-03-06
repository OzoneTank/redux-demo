import actionTypes from '../constants/actionTypes';

function resetInfo() {
  return {
    type: actionTypes.RESET_INFO
  };
}

function addFeedDogsTodo() {
  return {
    type: actionTypes.ADD_TODO,
    payload: { message: 'Feed the dogs' }
  }
}

export {
  resetInfo,
  addFeedDogsTodo
};
