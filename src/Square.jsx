import React, { useState } from 'react'

function Square(props) {
	let [color, setColor] = useState("none")
	
	let toggleClick = () => {
		if (color === "none") {
			setColor("blue")
		}
		else if (color === "blue") {
			setColor("orange")
		}
		else {
			setColor("none")
		}
	}

	return (
		<div className="Square">
			<button className={color} onClick={toggleClick}> {(props.label < 10) && 0}{props.label} </button>
		</div>
	)
}

export default Square;
