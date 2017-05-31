import React from 'react';

function renderStars(rating) {
	let stars = [];
	for (let i=0; i<rating; i++) {
		stars.push(<i key={i} className="fa fa-star"></i>);
	}
	return stars;
}

const StarRater = ({ rating }) => (
	<td>
		{renderStars(rating)}
	</td>
)

export default StarRater