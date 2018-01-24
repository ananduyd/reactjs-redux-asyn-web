import {connect} from 'react-redux';
import Home from '../components/Home';
import {sample} from '../actions/sample';
import {withRouter} from 'react-router';

const mapStateToProps = ({home}) => ({home});
const mapDispatchToProps = (dispatch) => ({
  sampleAction: (someData) => dispatch(sample(someData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));