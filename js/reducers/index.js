import { ADD_REPOSITORY, RATE_REPOSITORY } from '../actions'

function findIndex(state, name) {
	let index = -1;
	for (let i=0; i<state.length; i++) {
		if (state[i].name == name) {
			index = i;
			break;
		}
	}

	if (index === -1) {
		throw new Error('Could not find repository to rate');
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
			let index = findIndex(state, action.repo);

			return insertIntoState(state, index, 'rating', action.rating);
		default:
			return state;
	}
}

export function repositoryApp(state = {}, action) {
	return {
		repoList: repositoryReducer(state.repoList, action)
	}
}

