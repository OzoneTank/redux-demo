import React from 'react';

const TodoListComponent = ({ todos, actions }) => {
  const { removeTodo } = actions.todos;

  return (
    <table className="App-table">
      <thead>
        <tr>
          <th>Messages</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {todos.size ? todos.map(todo => {
          const id = todo.get('id');
          const message = todo.get('message');
          return (
            <tr key={id}>
              <td>{message}</td>
              <td
                className="App-button"
                onClick={() => removeTodo(id)}>
                done
              </td>
            </tr>
          )
        }) : <tr><td colSpan="2">no messages</td></tr>}
      </tbody>
    </table>
  );
}

export default TodoListComponent;
