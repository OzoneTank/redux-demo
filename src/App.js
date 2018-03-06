import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './containers/TodoListContainer';
import TodoField from './containers/TodoFieldContainer';
import Info from './containers/InfoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
        <TodoField />
        <Info />
      </div>
    );
  }
}

export default App;
