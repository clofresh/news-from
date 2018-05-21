import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import axios from 'axios';
import moment from 'moment';

import './Homepage.css';

export class Homepage extends React.Component {
	constructor() {
		super();
		this.state = {
			cnnIsLoading: true,
			foxIsLoading: true,
			breitbartIsLoading: true,
			msnbcIsLoading: true,
			cnn: [],
			fox: [],
			breitbart: [],
			msnbc: []
		};
	}

	componentWillMount() {
		axios
			.get('/api/cnn')
			.then(res => {
				this.setState({
					cnn: res.data.items,
					cnnIsLoading: false
				});
				console.log('cnn res', res);
			})
			.catch(function(err) {
				console.log(err);
			});

		axios
			.get('/api/fox')
			.then(res => {
				this.setState({
					fox: res.data.items,
					foxIsLoading: false
				});
			})
			.catch(function(err) {
				console.log(err);
			});

		axios
			.get('/api/breitbart')
			.then(res => {
				this.setState({
					breitbart: res.data.items,
					breitbartIsLoading: false
				});
			})
			.catch(function(err) {
				console.log(err);
			});

		axios
			.get('/api/msnbc')
			.then(res => {
				this.setState({
					msnbc: res.data.items,
					msnbcIsLoading: false
				});
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	componentDidMount() {}

	render() {
		return (
			<div className="homepage">
				<div className="container">
					<div className="content" id="cnn-content">
						<div className="news-site">
							<h2>CNN</h2>
						</div>
						<Scrollbars universal autoHeight autoHeightMin={60 + 'vh'}>
							{this.state.cnnIsLoading === true ? (
								<div className="spinner-overlay">
									<img
										className="loading-spinner"
										src="/assets/images/news-from-logo.png"
										alt="loading-spinner"
									/>
								</div>
							) : (
								<div className="articles">
									{this.state.cnn.map((cnnItem, index) => {
										while (index < 5) {
											return (
												<article key={'cnn' + index}>
													<div className="overlay">
														<time
															className="article-date"
															key={'cnn' + cnnItem.created}
														>
															{moment(cnnItem.created).format(
																'MMMM Do YYYY, h:mm a'
															)}
														</time>
														<h3
															className="article-headline"
															key={cnnItem.title}
														>
															{cnnItem.title}
														</h3>
														{/*<p>{cnnItem.description}</p>*/}
														{
															<a className="article-link" href={cnnItem.url}>
																...->
															</a>
														}
													</div>
												</article>
											);
										}
									})}
								</div>
							)}
						</Scrollbars>
					</div>
					<div className="content" id="fox-content">
						<div className="news-site">
							<h2>Fox</h2>
						</div>
						<Scrollbars universal autoHeight autoHeightMin={60 + 'vh'}>
							{this.state.foxIsLoading === true ? (
								<div className="spinner-overlay">
									<img
										className="loading-spinner"
										src="/assets/images/news-from-logo.png"
										alt="loading-spinner"
									/>
								</div>
							) : (
								<div className="articles">
									{this.state.fox.map((foxItem, index) => {
										while (index < 5) {
											return (
												<article key={'fox' + index}>
													<div className="overlay">
														<time
															className="article-date"
															key={'fox' + foxItem.created}
														>
															{moment(foxItem.created).format(
																'MMMM Do YYYY, h:mm a'
															)}
														</time>
														<h3
															className="article-headline"
															key={foxItem.title}
														>
															{foxItem.title}
														</h3>
														{/*<p>{foxItem.description}</p>*/}
														{
															<a className="article-link" href={foxItem.url}>
																...->
															</a>
														}
													</div>
												</article>
											);
										}
									})}
								</div>
							)}
						</Scrollbars>
					</div>
				</div>

				<div className="container">
					<div className="content" id="breitbart-content">
						<div className="news-site">
							<h2>Breitbart</h2>
						</div>
						<Scrollbars universal autoHeight autoHeightMin={60 + 'vh'}>
							{this.state.breitbartIsLoading === true ? (
								<div className="spinner-overlay">
									<img
										className="loading-spinner"
										src="/assets/images/news-from-logo.png"
										alt="loading-spinner"
									/>
								</div>
							) : (
								<div className="articles">
									{this.state.breitbart.map((breitbartItem, index) => {
										while (index < 5) {
											return (
												<article key={'breitbart' + index}>
													<div className="overlay">
														<time
															className="article-date"
															key={'breitbart' + breitbartItem.created}
														>
															{moment(breitbartItem.created).format(
																'MMMM Do YYYY, h:mm a'
															)}
														</time>
														<h3
															className="article-headline"
															key={breitbartItem.title}
														>
															{breitbartItem.title}
														</h3>
														{/*<p>{breitbartItem.description}</p>*/}
														{
															<a
																className="article-link"
																href={breitbartItem.url}
															>
																...->
															</a>
														}
													</div>
												</article>
											);
										}
									})}
								</div>
							)}
						</Scrollbars>
					</div>
					<div className="content" id="msnbc-content">
						<div className="news-site">
							<h2>MSNBC</h2>
						</div>
						<Scrollbars universal autoHeight autoHeightMin={60 + 'vh'}>
							{this.state.msnbcIsLoading === true ? (
								<div className="spinner-overlay">
									<img
										className="loading-spinner"
										src="/assets/images/news-from-logo.png"
										alt="loading-spinner"
									/>
								</div>
							) : (
								<div className="articles">
									{this.state.msnbc.map((msnbcItem, index) => {
										while (index < 5) {
											return (
												<article key={'msnbc' + index}>
													<div className="overlay">
														<time
															className="article-date"
															key={'msnbc' + msnbcItem.created}
														>
															{moment(msnbcItem.created).format(
																'MMMM Do YYYY, h:mm a'
															)}
														</time>
														<h3
															className="article-headline"
															key={msnbcItem.title}
														>
															{msnbcItem.title}
														</h3>
														{/*<p>{msnbcItem.description}</p>*/}
														{
															<a className="article-link" href={msnbcItem.url}>
																...->
															</a>
														}
													</div>
												</article>
											);
										}
									})}
								</div>
							)}
						</Scrollbars>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
