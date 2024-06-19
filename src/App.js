import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import FunctionComponent from './components/FunctionComponent'
import React from 'react'

class App extends React.Component {
	state = {
		name: 'Duy vip pro',
		age: 20,
	}

	handleClick = () => {
		console.log('click')
		this.setState({ name: 'anh duy dep trai' })
	}

	render() {
		return (
			<div>
				<MyComponent />
				<FunctionComponent name={this.state.name} />
				<button onClick={this.handleClick}>click me</button>
			</div>
		)
	}
}

export default App
