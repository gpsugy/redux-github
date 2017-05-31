import React from 'react';
import StarRater from './star-rater';

const Repo = ({ name, rating }) => (
	<tr>
		<th>{name}</th>
		<StarRater rating={rating} />
	</tr>
)

export default Repo