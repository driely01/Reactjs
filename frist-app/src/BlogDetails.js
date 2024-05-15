import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import Loading from "./Loading";

const BlogDetails = () => {
	const {id} = useParams();
	const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
	return (
		<div className="blog-details">
			{isPending && <Loading />}
			{error && <div>{error}</div>}
			{blog && (
				<article className="blog-preview center-item blog-detail">
					<h2 className="underline center-item">{blog.title}</h2>
					<p className="blog-body justified">{blog.body}</p>
					<p className="blog-author right-side"><span className="underline">{blog.author}</span></p>
				</article>
			)}
		</div>
	);
}
export default BlogDetails;