import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'; //imports every function in actionsCreators
import Main from './Main';

function mapStateToProps(state){
	return{
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps);

export default App;