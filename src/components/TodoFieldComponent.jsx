import React, { Component } from 'react';

class TodoFieldComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.props.actions.todos.addTodo(this.state.message);
    this.setState({message: ''});
  };

  render() {
    return (
      <div>
        <span>message:</span>
        <input
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value})}
        />
        <div class="App-button" onClick={this.addTodo}>ADD</div>
      </div>
    )
  }
}

export default TodoFieldComponent;
