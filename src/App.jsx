import React, { useState } from 'react'
import Start from './Start'
import Teams from './Teams'
import Info from './Info'
import Field from './Field'
import './App.css'

function App() {
	let [started, setStarted] = useState(0);
	let [names, setNames] = useState({
		1: '',
		2: '',
	})
	let [scores, setScore] = useState({
		1: 0,
		2: 0,
	})

	return (
		<div className="App">
			{ (started === 0) && <Start setStarted={setStarted} />}
			{ (started === 1) && <Teams setStarted={setStarted} setNames={setNames} /> }
			{ (started === 2) && <Info scores={scores} names={names} /> }
			{ (started === 2) && <Field /> }
		</div>
	)
}

export default App;
