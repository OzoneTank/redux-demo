import { connect } from 'react-redux';
import {
  bindActionCreators,
  compose
} from 'redux';
import Info from '../components/InfoComponent';
import * as infoActionsCreators from '../actions/info';

const mapStateToProps = (state, ownProps) => {
  return {
    totalTodos: state.getIn(['todos', 'todos']).size,
    info: state.getIn(['info', 'info'])
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      info: bindActionCreators(infoActionsCreators, dispatch),
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Info);
