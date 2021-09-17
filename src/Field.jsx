import React from 'react'
import Square from './Square'

function Field(props) {
	return (
		<div className="Field">
			{ [...Array(96).keys()].map(x => { return (<Square key={x} label={x+1} />) })}
		</div>
	)
}

export default Field;
