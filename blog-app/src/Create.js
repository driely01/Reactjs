import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();
	const notify = {
		duration: 2000,
		position: 'bottom-right',
		style: {
			background: '#f1356d',
			color: '#ffffff'
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, author};
		setIsPending(true);
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		})
		.then((res) => {
			if (!res.ok)
				throw Error('ERROR: could not reach the db');
			toast.success('blog has been added successfully', notify);
			setIsPending(false);
			history.push('/');
		})
		.catch((err) => toast.error(err.message, notify))
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
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
}
export default Create;