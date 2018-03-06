import { connect } from 'react-redux';
import {
  bindActionCreators,
  compose
} from 'redux';
import TodoField from '../components/TodoFieldComponent';

import * as todosActionCreators from '../actions/todos';

const mapStateToProps = (state, ownProps) => {
  return {
    // todos: state.get('todos')
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
)(TodoField);
