import React from 'react';

function renderStars(rating, handleClick) {
	let stars = [];
	for (let i=0; i<5; i++) {
		(i < rating) ? stars.push(<i key={i} className="fa fa-star" onClick={() => handleClick(i+1)}></i>)
					: stars.push(<i key={i} className="fa fa-star-o" onClick={() => handleClick(i+1)}></i>);
	}
	return stars;
}

const StarRater = ({ rating, handleClick }) => (
	<td>
		{renderStars(rating, handleClick)}
	</td>
)

export default StarRater