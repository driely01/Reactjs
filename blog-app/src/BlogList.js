import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Blog from "./Blog";


const BlogList = ({blogs, title, handleDelete}) => {
	// const [name, setName] = useState("")

	return (
		<div className="blog-list">
			<div className="title">
				<h2 className="blog-title">{title}</h2>
				<div></div>
			</div>
			{blogs.map((blog) => (

				<Blog blog={blog} />
			))}
		</div>
	);
}
export default BlogList;