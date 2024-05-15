import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import Loading from "./Loading";
import { useEffect } from "react";

const BlogDetails = () => {
	const {id} = useParams();
	const {data: blog, setData: setBlog, error, isPending, setIsPending} = useFetch(`http://localhost:8000/blogs/${id}`);
	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: 'DELETE'
		})
		.then((res) => {
			if (!res.ok)
				throw Error('could not reach the db');
			setBlog(null);
			setIsPending(true);
		})
		.catch((err) => alert(err.message))
	};
	useEffect(() => {
		fetch(`http://localhost:8000/blogs/${id}`)
	}, [id]);
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