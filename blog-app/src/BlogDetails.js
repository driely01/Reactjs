import { useParams, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import useFetch from './useFetch';
import Loading from "./Loading";

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
			{blog && (
				<article className="blog-preview center-item blog-detail">
					<div className="title">
						<div className="left"></div>
						<h2 className="p-10">{blog.title}</h2>
						<div className="right"></div>
					</div>
					<p className="blog-body justified">{blog.body}</p>
					<p className="blog-author right-side"><span className="underline">{blog.author}</span></p>
					<button onClick={handleDelete}>delete blog</button>
				</article>
			)}
		</div>
	);
}
export default BlogDetails;