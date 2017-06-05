import React from 'react';

class Repo extends React.Component {
	constructor(props) {
		super(props);

		this.renderStars = this.renderStars.bind(this);
	}

	componentWillMount() {
		this.props.fetchDescription();
	}

	renderStars(rating, handleClick) {
		let stars = [];
		for (let i=0; i<5; i++) {
			(i < rating) ? stars.push(<i key={i} className="fa fa-star" onClick={() => handleClick(i+1)}></i>)
						: stars.push(<i key={i} className="fa fa-star-o" onClick={() => handleClick(i+1)}></i>);
		}
		return stars;
	}

	render() {
		return (
			<tr>
				<th>{this.props.name}</th>
				<td>{this.description}</td>
				<td>{this.renderStars(this.props.rating, this.props.handleClick)}</td>
			</tr>
		)
	}
}

export default Repo