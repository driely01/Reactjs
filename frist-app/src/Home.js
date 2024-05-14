import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Loading from './Loading';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs);
	};
	useEffect(() => {
		setTimeout(() => { // just simulating the fetch large data.
			fetch('http://localhost:8000/blogs')
			.then((res) => {
				if (!res.ok)
					throw Error('could not fetch the data for that resource');
				return res.json();
			})
			.then(data => {
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setIsPending(false);
			});
		}, 1000)
	}, []);
	return (
		<div className="home">
			{error && <div>{error}</div> }
			{isPending && <Loading /> }
			{blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
		</div>
	);
}
export default Home;