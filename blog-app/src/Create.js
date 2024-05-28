import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import useFetch from './useFetch';

const Create = () => {
	const {data: name} = useFetch('http://localhost:8000/authors');
	let select;
	const [author, setAuthor] = useState(null);
	if (name) {
		select =  <select
			value={author}
			onChange={e => setAuthor(e.target.value)}
		>
			{name.map((n, i) => {
				if (!i && !author)
					setAuthor(name[i].id);
				return <option value={n.id} key={n.id}>{n.name}</option>
			})}
		</select>;
	}
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
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
		if (name) {
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
		}
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
				{select}
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
}
export default Create;