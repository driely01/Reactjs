import { useParams, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import useFetch from './useFetch';
import Loading from "./Loading";
import BlogD from './BlogD';

const BlogDetails = () => {
	const {id} = useParams();
	const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
	const history = useHistory();
	const notify = {
		duration: 2000,
		position: 'bottom-right',
		style: {
			background: '#f1356d',
			color: '#ffffff'
		}
	};
	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${id}`, { method: 'DELETE' })
			.then((res) => {
				if (!res.ok)
					throw Error('could not reach the db');
				toast.success('blog has been deleted successfully', notify);
				history.push('/');
			})
			.catch((err) => toast.error(err.message, notify))
	};
	return (
		<div className="blog-details">
			{isPending && <Loading />}
			{error && <div>{error}</div>}
			{blog && <BlogD blog={blog} handleDelete={handleDelete} />}
		</div>
	);
}
export default BlogDetails;