import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, author};
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		})
		.then((res) => {
			if (!res.ok)
				throw Error('could not reach the db');
		})
		.catch((err) => alert(err.message))
		setAuthor('');
		setTitle('');
		setBody('');
	};
	return (
		<div className="create">
			<div className="title add-blog">
				<div className="left"></div>
				<h2 className="p-10">add a new blog</h2>
				<div className="right"></div>
			</div>
			<form onSubmit={handleSubmit}>
				<label>blog Title: </label>
				<input
					type="text"
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label>Blog Body:</label>
				<textarea
					required
					value={body}
					onChange={e => setBody(e.target.value)}
				></textarea>
				<label>Blog Author:</label>
				<select
					value={author}
					onChange={e => setAuthor(e.target.value)}
				>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
					<option value="john">john</option>
				</select>
				<button>Add Blog</button>
			</form>
		</div>
	);
}
export default Create;