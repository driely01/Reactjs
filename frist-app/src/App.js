import './App.css';

function App() {
	const title = 'Welcome to the new blog';
	const likes = 50;
	const link = 'http://www.google.com';
	return (
		<div className="App">
			<div className="content">
				<h1>{title}</h1>
				<p>Liked {likes} times</p>
				<p>{20 + 10}</p>
				<p>{'hello world'}</p>
				<p>{[1, 2, 3, 4, 5]}</p>
				<p>{Math.random() * 10}</p>
				<a href={link}>google link</a>
			</div>
		</div>
	);
}

export default App;