import React from 'react';
import RepositoryList from './repository-list';

const App = ({ repoList }) => (
	<div>
		<RepositoryList repoList={repoList}/>
	</div>
)

export default App