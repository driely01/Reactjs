import BlogList from './BlogList';
import Loading from './Loading';
import useFetch from './useFetch';

const Home = () => {
	const {data: blogs, setData:setBlogs, isPending, error} = useFetch('http://localhost:8000/blogs');
	return (
		<div className="home">
			{error && <div>{error}</div> }
			{isPending && <Loading /> }
			<div className="author-search">
				<input type="text" placeholder='search for blogs' />
				<button className="search-btn">search</button>
			</div>
			{blogs && <BlogList blogs={blogs} title="All Blogs" isAuthor={true} />}
		</div>
	);
}
export default Home;