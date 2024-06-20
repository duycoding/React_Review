import Person from './Person'; // Import component Person

const List = ({ people }) => {
	return (
		<ul>
			{people.map((person) => (
				<Person
					key={person.id} // Cần có key duy nhất cho mỗi phần tử trong danh sách
					name={person.name}
					age={person.age}
					image={person.image}
				/>
			))}
		</ul>
	);
};

export default List;
