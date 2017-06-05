import fetch from 'isomorphic-fetch';

// action types
export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const RATE_REPOSITORY = 'RATE_REPOSITORY';
export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';

// action creators
export function addRepository(repo) {
	return {
		type: ADD_REPOSITORY,
		repo: repo
	}
}

export function rateRepository(repo, rating) {
	return {
		type: RATE_REPOSITORY,
		repo: repo,
		rating: rating
	}
}

export function fetchDescriptionSuccess(repo, description) {
	return {
		type: FETCH_DESCRIPTION_SUCCESS,
		repo: repo,
		description: description
	}
}

export function fetchDescriptionError(repo, error) {
	return {
		type: FETCH_DESCRIPTION_ERROR,
		repo: repo,
		error: error
	}
}

export function fetchDescription(repo) {
	return function(dispatch) {
		let url = 'https://api.github.com/repos/' + repo;
		return fetch(url)
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
			}).then(response => response.json())
			.then(json => dispatch(fetchDescriptionSuccess(repo, json.description)))
			.catch(error => dispatch(fetchDescriptionError(repo, error)))
	}
}

// Store State Model - an array of repo objects
// {
// 	[
// 		{
// 			name: '1st repo',
// 			rating: 3
// 		},
// 		{
// 			name: '2nd repo',
// 			rating: 3
// 		}
// 	]
// }