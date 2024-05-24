import useFetchBlog from "./useFetchBlog";

const BlogD = ({blog, handleDelete}) => {
	const name = useFetchBlog(blog);
	return (
		<article className="blog-preview center-item blog-detail">
			<div className="title">
				<div className="left"></div>
				<h2 className="p-10">{blog.title}</h2>
				<div className="right"></div>
			</div>
			<p className="blog-body justified">{blog.body}</p>
			<p className="blog-author right-side"><span className="underline">{name}</span></p>
			<button onClick={handleDelete}>delete blog</button>
		</article>
	);
}
export default BlogD;