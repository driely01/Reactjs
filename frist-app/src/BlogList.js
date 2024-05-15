import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title, handleDelete}) => {
	return (
		<div className="blog-list">
			<h2 className="blog-title"><span>{title}</span></h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link className="links-react" to={`/blogs/${blog.id}`} >
						<h2>{blog.title}</h2>
					</Link>
					<p className="blog-author">Written by <span>{blog.author}</span></p>
					<p className="blog-body">{blog.body}</p>
					<button onClick={() => handleDelete(blog.id)}>delete blog</button>
				</div>
			))}
		</div>
	);
}
export default BlogList;