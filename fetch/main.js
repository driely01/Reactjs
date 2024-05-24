async function getBlogs() {
	const response = await fetch('http://localhost:8000/blogs');
	// console.log(response);
	const blogs = await response.json();
	// console.log(blogs);
	blogs.map(async blog => {
		const res = await fetch('http://localhost:8000/authors/' + blog.author)
		const author = await res.json();
		console.log(`title: ${blog.title} author: ${author.name}`);
	});
}
getBlogs();