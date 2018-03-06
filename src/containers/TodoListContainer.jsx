import { connect } from 'react-redux';
import {
  bindActionCreators,
  compose
} from 'redux';
import TodoList from '../components/TodoListComponent';
import * as todosActionCreators from '../actions/todos';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.getIn(['todos', 'todos'])
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      todos: bindActionCreators(todosActionCreators, dispatch),
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList);
