import { ADD_REPOSITORY, RATE_REPOSITORY } from '../actions'

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
			let index = -1;
			for (let i=0; i<state.length; i++) {
				if (state[i].name == action.repo) {
					index = i;
					break;
				}
			}

			if (index === -1) {
				throw new Error('Could not find repository to rate');
			}

			let before = state.slice(0, index);
			let after = state.slice(index + 1);
			return before.concat(...state[index]
				, { id: index, name: state[index].name, rating: action.rating }
				, after);
		default:
			return state;
	}
}

export function repositoryApp(state = {}, action) {
	return {
		repoList: repositoryReducer(state.repoList, action)
	}
}

