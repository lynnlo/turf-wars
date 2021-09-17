import React from 'react'

function Info(props) {
	return (
		<div className="Info">
			<div className="names">
				<h1 className="blue"> {props.names[1] || "Team 1"}  </h1>
				<h1 className="orange disable"> {props.names[2] || "Team 2"} </h1>
			</div>
			<div className="names">
				<p> {props.scores[1]} </p>
				<p> {props.scores[2]} </p>
			</div>

			<br />
		</div>
	)
}

export default Info;
