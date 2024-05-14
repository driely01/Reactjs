const BlogList = ({blogs}) => {
	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p className="blog-author">Written by {blog.author}</p>
					<div className="blog-body">{blog.body}</div>
				</div>
			))}
		</div>
	);
}
export default BlogList;