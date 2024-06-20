import './index.css';

const Person = ({ name, age, image }) => {
	return (
		<article className='person'>
			<img
				src={image}
				art={name}
				className='.img'></img>
			<div>
				<h4>{name}</h4>
				<p>{age}</p>
			</div>
		</article>
	);
};

export default Person;
