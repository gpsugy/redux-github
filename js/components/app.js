import React from 'react';

import AddRepo from '../containers/add-repo';
import RepositoryList from './repository-list';

const App = ({ repoList }) => (
	<div>
		<RepositoryList repoList={repoList}/>
		<AddRepo />
	</div>
)

export default App