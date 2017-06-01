import React from 'react';

import ContainerStarRater from '../containers/container-star-rater';

const Repo = ({ name, rating }) => (
	<tr>
		<th>{name}</th>
		<ContainerStarRater rating={rating} name={name} />
	</tr>
)

export default Repo