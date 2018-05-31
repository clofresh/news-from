import React, { Component } from 'react';
import axios from 'axios';
import { Chart, Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import './Searchbar.css';

class Searchbar extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			value: '',
			searchResults: [],
			chartData: {
				cnn: '',
				fox: '',
				breitbart: '',
				msnbc: ''
			}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.reRender = this.reRender.bind(this);
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		this.setState({
			value: ''
		});

		axios
			.get(`/routes/api/allArticles/searchword/${this.state.value}`)
			.then(result => {
				console.log(result.data);
				this.setState({ searchResults: result.data });
			});
	}

	buildChart(data) {
		var ctx = document.getElementById('myChart');
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['CNN', 'FOX', 'BREITBART', 'MSNBC'],
				datasets: [
					{
						label: '# of Appearances',
						data: [12, 19, 3, 5],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)'
						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)'
						],
						borderWidth: 3
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				legend: {
					display: true,
					labels: {}
				}
			}
		});
	}

	reRender(e) {
		this.setState(
			{
				chartData: {
					cnn: 'cnntest',
					fox: 'foxtest',
					breitbart: 'breittest',
					msnbc: 'msnbctest'
				}
			},
			function() {
				console.log(this.state.chartData);
			}
		);
	}

	componentDidMount() {
		this.buildChart();
	}

	render() {
		return (
			<div className="searchbar-component">
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
				{this.state.searchResults.map((results, index) => {
					console.log('results', results);
					return (
						<a href={results.url}>
							<div key={results.site + index}>
								{results.title} -----------------------> {results.site}
							</div>
						</a>
					);
				})}
				<div className="canvas-wrapper">
					<canvas id="myChart" />
				</div>
				<button onClick={this.reRender}>reRender</button>
			</div>
		);
	}
}

export default Searchbar;
