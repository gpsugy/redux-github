import { connect } from 'react-redux';

import RepositoryList from '../components/repository-list';

const mapStateToProps = (state) => {
	return {
		repoList: state.repoList
	}
}

const ContainerRepoList = connect(
	mapStateToProps
)(RepositoryList)

export default ContainerRepoList