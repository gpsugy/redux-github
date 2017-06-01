import React from 'react';

import AddRepo from '../containers/add-repo';
import ContainerRepoList from '../containers/container-repo-list';

const App = ({ repoList }) => (
	<div>
		<ContainerRepoList />
		<AddRepo />
	</div>
)

export default App