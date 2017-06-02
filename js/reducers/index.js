import {
  ADD_REPOSITORY,
  FETCH_DESCRIPTION_ERROR,
  FETCH_DESCRIPTION_SUCCESS,
  RATE_REPOSITORY,
} from '../actions';

function findIndexOfRepo(state, name) {
	let index = -1;
	for (let i=0; i<state.length; i++) {
		if (state[i].name == name) {
			index = i;
			break;
		}
	}

	if (index === -1) {
		throw new Error('Could not find repository');
	}

	return index;
}

function insertIntoState(state, index, attribute, val) {
	let before = state.slice(0, index);
	let after = state.slice(index + 1);
	return before.concat(...state[index]
		, { id: index, name: state[index].name, [attribute]: val }
		, after);
}

function repositoryReducer(state = [], action) {
	let index;
	switch (action.type) {
		case ADD_REPOSITORY:
			return [
					...state, {
					id: state.length,
					name: action.repo,
					rating: null
				}
			]
		case RATE_REPOSITORY:
			index = findIndexOfRepo(state, action.repo);

			return insertIntoState(state, index, 'rating', action.rating);
		case FETCH_DESCRIPTION_SUCCESS:
			index = findIndexOfRepo(state, action.repo);

			return insertIntoState(state, index, 'description', action.description);
		case FETCH_DESCRIPTION_ERROR:
			index = findIndexOfRepo(state, action.repo);

			return insertIntoState(state, index, 'description', 'N/A');
		default:
			return state;
	}
}

export function repositoryApp(state = {}, action) {
	return {
		repoList: repositoryReducer(state.repoList, action)
	}
}

