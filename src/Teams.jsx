import React, { useState } from 'react'

function Teams(props) {
	let [names, setNames] = useState({
		1: '',
		2: '',
	})

	return (
		<div className="Teams">
			<h1> Select Your Teams </h1>
			<div className="names">
				<h1> Team 1 </h1>
				<h1> Team 2 </h1>
			</div>
			<div className="names">
				<input onKeyUp={(e) => { setNames({1: e.target.value, 2: names[2] })}} />
				<input onKeyUp={(e) => { setNames({1: names[1], 2: e.target.value })}} />
			</div>

			<br />

			<button onClick={ () => { props.setStarted(2); props.setNames(names) } }> Start </button>
		</div>
	)
}

export default Teams;
