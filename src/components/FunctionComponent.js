import React from 'react'

export default function FunctionComponent({ name, age }) {
	const handleClick = () => {
		console.log('click 2')
	}
	return (
		<>
			<h2>This is function {name}</h2>
			<button onClick={handleClick}>click 2</button>
		</>
	)
}
