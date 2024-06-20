import React from 'react'

export default function FunctionComponent({ name, age }) {
	let data = {
		name: '',
		email: '',
	}

	const handleClick = (event) => {
		console.log(event.target.value)
	}

	return (
		<>
			<h2>This is function {name}</h2>
			<form>
				<input
					type="text"
					onChange={(event) => {
						handleClick(event)
					}}></input>
				<button>Submit</button>
			</form>
		</>
	)
}
