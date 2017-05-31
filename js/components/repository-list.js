import React from 'react';
import Repo from './repo';

const RepositoryList = ({ repoList }) => (
	<table>
		<tbody>
			{repoList.map(repo =>
				<Repo key={repo.id} name={repo.name} rating={repo.rating} />
			)}
		</tbody>
	</table>
)

export default RepositoryList