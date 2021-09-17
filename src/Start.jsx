import React from 'react'

function Start(props) {
	return (
		<div className="Start">
			<h1> Turf Wars </h1>
			
			<div className="text">
				<p> Students get into two teams. </p>
				<p> Every turn a team turns 4 squares. </p>
				<p> Any square fully surronded by squares of the same color will turn to that color. </p>
				<p> The team that control more square by the end of the timer wins. </p>
			</div>

			<br />

			<button onClick={ () => {props.setStarted(1)} }> Start </button>
		</div>
	)
}

export default Start;
