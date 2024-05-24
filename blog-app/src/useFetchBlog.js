import {useState, useEffect} from 'react';

const useFetchBlog = blog => {
	const [ name, setName ] = useState('');

	useEffect(() => {
		async function getName() {
			try {
				const response = await fetch('http://localhost:8000/authors/' + blog.author);
				const author = await response.json();
				const name = author.name;
				setName(name);
			} catch (error) {
				console.log(error.message);
			}
		}
		getName();
	}, [blog]);
	return name;
}

export default useFetchBlog;