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
	render() {
		return (
			<div>
				<MyComponent />
				<FunctionComponent name={this.state.name} />
			</div>
		)
	}
}

export default App
