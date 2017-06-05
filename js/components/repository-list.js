import React from 'react';

import ContainerRepo from '../containers/container-repo';

const RepositoryList = ({ repoList }) => (
	<table>
		<tbody>
			{repoList.map(repo =>
				<ContainerRepo key={repo.id} name={repo.name} rating={repo.rating} />
			)}
		</tbody>
	</table>
)

export default RepositoryList