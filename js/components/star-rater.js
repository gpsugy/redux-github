import React from 'react';

function renderStars(rating, handleClick) {
	let stars = [];
	for (let i=0; i<5; i++) {
		(i < rating - 1) ? stars.push(<i key={i} className="fa fa-star"></i>)
					: stars.push(<i key={i} className="fa fa-star-o"></i>);
	}
	return stars;
}

const StarRater = ({ rating, handleClick }) => (
	<td>
		{renderStars(rating, handleClick)}
	</td>
)

export default StarRater