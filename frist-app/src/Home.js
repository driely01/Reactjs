import { useState } from 'react';

const Home = () => {
	const [name, setName] = useState('mario');
	const [age, setAge] = useState(25);
	const handleClick = () => {
		setName('driss');
		setAge(22);
	};
	return (
		<div className="home">
			<h2>home page</h2>
			<p>{name} is {age} years old.</p>
			<button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={handleClick}>Click me</button>
		</div>
	);
}
export default Home;