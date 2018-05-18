import React from "react";
import "./Homepage.css";

export class Homepage extends React.Component {
	render() {
		return(
			<div className="homepage">

				<div className="container">
					<div className="content" id="cnn-content">
						<div className="headline">
							<h2>CNN</h2>
						</div>
						<div className="text">
							<p>CNN article Text and Co</p>
						</div>
					</div>
					<div className="content" id="fox-content">
						<div className="headline">
							<h2>Fox</h2>
						</div>
						<div className="text">
							<p>FOX article Text and ContentFOX article Text and ContentFOX article Text and ContentFOX article Text and ContentFOX article Text and Content</p>
						</div>
					</div>
					<div className="content" id="breitbart-content">
						<div className="headline">
							<h2>Breitbart</h2>
						</div>
						<div className="text">
							<p>Breitbart article Text and ContentBreitbart article Text and ContentBreitbart article Text and ContentBreitbart article Text and ContentBreitbart article Text and Content</p>
						</div>
					</div>
					<div className="content" id="msnbc-content">
						<div className="headline">
							<h2>MSNBC</h2>
						</div>
						<div className="text">
							<p>MSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and ContentMSNBC article Text and Content</p>
						</div>
					</div>
				</div>

			</div>
			)
	}
}

export default Homepage;