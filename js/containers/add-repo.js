import { connect } from 'react-redux';
import React from 'react'

import { addRepository } from '../actions';

var textInput;

class AddRepo extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		if (!this.textInput.value.trim()) {
			return
		}

		this.props.dispatch(addRepository(this.textInput.value));
	}	

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref={input => this.textInput = input} placeholder="Add a repo..." />
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}
export default connect()(AddRepo)
