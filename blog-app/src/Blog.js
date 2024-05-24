import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetchBlog from "./useFetchBlog";

const Blog = ({blog}) => {
	const name = useFetchBlog(blog);
	return (
		<div className="blog-preview" key={blog.id}>
			<Link className="links-react" to={`/blogs/${blog.id}`} >
				<h2 className="underline">{blog.title}</h2>
			</Link>
			<p className="blog-author">Written by <span className="underline">{name}</span></p>
			<p className="blog-body">{`${(blog.body).slice(0, 200)}...`}</p>
		</div>
	);
}
export default Blog;