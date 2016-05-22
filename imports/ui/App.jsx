import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Index from './index';

function mapStateToProps(state) {
  return  {
    // posts: state.posts,
    // comments: state.comments
    user: Meteor.user(),
    foo: 'bar'
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(actionCreators, dispatch);
  return {};
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
