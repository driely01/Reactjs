import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, elit vitae pellentesque sagittis, erat est blandit libero, sit amet tristique sapien erat et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam accumsan, dui ac fermentum rutrum, purus urna malesuada turpis, eu accumsan metus odio eu lectus. Quisque gravida blandit dolor sit amet malesuada. Curabitur ornare ipsum quis justo vulputate efficitur. Pellentesque blandit sodales tellus porttitor scelerisque. Maecenas vitae euismod lorem. Quisque consectetur nulla nunc, ac interdum justo tincidunt nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor arcu, varius eu diam et, vestibulum consectetur diam.', author: 'mario', id: 1},
		{title: 'Welcome party!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, elit vitae pellentesque sagittis, erat est blandit libero, sit amet tristique sapien erat et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam accumsan, dui ac fermentum rutrum, purus urna malesuada turpis, eu accumsan metus odio eu lectus. Quisque gravida blandit dolor sit amet malesuada. Curabitur ornare ipsum quis justo vulputate efficitur. Pellentesque blandit sodales tellus porttitor scelerisque. Maecenas vitae euismod lorem. Quisque consectetur nulla nunc, ac interdum justo tincidunt nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor arcu, varius eu diam et, vestibulum consectetur diam.', author: 'driss', id: 2},
		{title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, elit vitae pellentesque sagittis, erat est blandit libero, sit amet tristique sapien erat et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam accumsan, dui ac fermentum rutrum, purus urna malesuada turpis, eu accumsan metus odio eu lectus. Quisque gravida blandit dolor sit amet malesuada. Curabitur ornare ipsum quis justo vulputate efficitur. Pellentesque blandit sodales tellus porttitor scelerisque. Maecenas vitae euismod lorem. Quisque consectetur nulla nunc, ac interdum justo tincidunt nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor arcu, varius eu diam et, vestibulum consectetur diam.', author: 'mario', id: 3},
	]);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs);
	};
	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
		</div>
	);
}
export default Home;