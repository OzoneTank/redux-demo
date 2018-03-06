import actionTypes from '../constants/actionTypes';

function addTodo(message) {
  return {
    type: actionTypes.ADD_TODO,
    payload: { message }
  };
}

function removeTodo(id) {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: { id }
  };
}

export {
  addTodo,
  removeTodo
};
