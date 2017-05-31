// action types
export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const RATE_REPOSITORY = 'RATE_REPOSITORY';

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



// State Model - an array of repo objects
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