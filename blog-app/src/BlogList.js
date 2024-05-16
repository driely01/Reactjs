import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title, handleDelete}) => {
	return (
		<div className="blog-list">
			<div className="title">
				<h2 className="blog-title">{title}</h2>
				<div></div>
			</div>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link className="links-react" to={`/blogs/${blog.id}`} >
						<h2 className="underline">{blog.title}</h2>
					</Link>
					<p className="blog-author">Written by <span className="underline">{blog.author}</span></p>
					<p className="blog-body">{`${(blog.body).slice(0, 200)}...`}</p>
				</div>
			))}
		</div>
	);
}
export default BlogList;