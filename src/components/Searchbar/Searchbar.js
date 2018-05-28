import React, { Component } from "react";
import axios from 'axios';
import "./Searchbar.css";

class Searchbar extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			value: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const newSearch = {
			searchValue: this.state.value
		};
		console.log("value", newSearch);
		this.setState({
			value: ""
		});

		axios.get(`/routes/api/allArticles/searchword/:${this.state.value}`)
			.then(result => {
				console.log(result)
			})

	}

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Buzzword/Public Figure"
					name="search"
					value={this.state.value}
					onChange={this.onChange}
				/>
				<input type="submit" onClick={this.onSubmit} />
			</form>
		);
	}
}

export default Searchbar;
