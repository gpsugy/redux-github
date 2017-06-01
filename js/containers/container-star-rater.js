import { connect } from 'react-redux';

import { rateRepository } from '../actions';
import StarRater from '../components/star-rater';

const mapStateToProps = (state, ownProps) => {
	let index = -1;
	for (let i=0; i<state.repoList.length; i++) {
		if (state.repoList[i].name == ownProps.name) {
			index = i;
			break;
		}
	}
	return {
		rating: index !== -1 ? state.repoList[index].rating : null
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: (rating) => {
			dispatch(rateRepository(ownProps.name, rating))
		}
	}
}

const ContainerStarRater = connect(
	mapStateToProps,
	mapDispatchToProps
)(StarRater)

export default ContainerStarRater