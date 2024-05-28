import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetchBlog from "./useFetchBlog";

const Blog = ({blog, isAuthor}) => {
	const name = useFetchBlog(blog);
	return (
		<div className="blog-preview">
			<Link className="links-react" to={`/blogs/${blog.id}`} >
				<h2 className="underline">{blog.title}</h2>
			</Link>
			{isAuthor && <p className="blog-author">Written by
				<Link to={`/authors/${blog.author}`}>
					<span className="underline"> {name}</span>
				</Link>
			</p>}
			<p className="blog-body">{`${(blog.body).slice(0, 200)}...`}</p>
		</div>
	);
}
export default Blog;