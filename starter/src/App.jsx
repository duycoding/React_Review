import data from './data.js';
import List from './List.jsx';
import Person from './Person.jsx';
import { useState } from 'react';
import './index.css';

const App = () => {
	const [people, setPeople] = useState(data);

	const handleClick = () => {
		console.log('click on button delete');
		setPeople([]);
	};

	return (
		<main>
			<div className='container'>
				<List people={people}></List>
				<button
					className='btn'
					onClick={handleClick}>
					Delete
				</button>
			</div>
		</main>
	);
};
export default App;
