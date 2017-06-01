import React from 'react';

function renderStars(rating) {
	let stars = [];
	for (let i=0; i<5; i++) {
		(i < rating - 1) ? stars.push(<i key={i} className="fa fa-star"></i>)
					: stars.push(<i key={i} className="fa fa-star-o"></i>);
	}
	return stars;
}

const StarRater = ({ rating }) => (
	<td>
		{renderStars(rating)}
	</td>
)

export default StarRater