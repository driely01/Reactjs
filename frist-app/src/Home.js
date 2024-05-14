import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Loading from './Loading';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs);
	};
	useEffect(() => {
		setTimeout(() => { // just simulating the fetch large data.
			fetch('http://localhost:8000/blogs')
			.then(res => res.json())
			.then(data => {
				setBlogs(data);
				setIsPending(false);
			});
		}, 1000)
	}, []);
	return (
		<div className="home">
			{isPending && <Loading /> }
			{blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
		</div>
	);
}
export default Home;