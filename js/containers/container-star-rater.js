import { connect } from 'react-redux';

import { rateRepository } from '../actions';
import StarRater from '../components/star-rater';

const mapStateToProps = (state, ownProps) => {
	let index = -1;
	for (let i=0; i<state.length; i++) {
		if (state[i].name == ownProps.name) {
			index = i;
			break;
		}
	}

	return {
		rating: index !== -1 ? state[index].rating : null
	}
}

const mapDispatchToProps = (dispatch, onwProps) => {
	return {
		handleClick: () => {
			dispatch(rateRepository(ownProps.name, ownProps.rating))
		}
	}
}

const ContainerStarRater = connect(
	mapStateToProps,
	mapDispatchToProps
)(StarRater)

export default ContainerStarRater