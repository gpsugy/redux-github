import { connect } from 'react-redux';

import { fetchDescription, rateRepository } from '../actions';
import Repo from '../components/repo';

const mapStateToProps = (state, ownProps) => {
	let index = -1;
	for (let i=0; i<state.repoList.length; i++) {
		if (state.repoList[i].name == ownProps.name) {
			index = i;
			break;
		}
	}
	return {
		rating: index !== -1 ? state.repoList[index].rating : null,
		description: index !== -1 ? state.repoList[index].description : null
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: (rating) => {
			dispatch(rateRepository(ownProps.name, rating))
		},
		fetchDescription: () => {
			dispatch(fetchDescription(ownProps.name))
		}
	}
}

const ContainerRepo = connect(
	mapStateToProps,
	mapDispatchToProps
)(Repo)

export default ContainerRepo