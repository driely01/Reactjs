import BlogList from './BlogList';
import Loading from './Loading';
import useFetch from './useFetch';

const Home = () => {
	const {data: blogs, setData:setBlogs, isPending, error} = useFetch('http://localhost:8000/blogs');
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(data => data.id !== id)
		setBlogs(newBlogs);
	};
	return (
		<div className="home">
			{error && <div>{error}</div> }
			{isPending && <Loading /> }
			{blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
		</div>
	);
}
export default Home;