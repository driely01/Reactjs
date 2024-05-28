import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './author.css'
import useFetch from './useFetch';
import BlogList from './BlogList';

function AuthorComponent(props) {
	return (
		<div className="author">
			<div className="profile-container">
				<div className="profile">
					<img src={props.image} alt="" />
				</div>
				<div className="author-infos">
					<h2>{props.name} {props.lastname}</h2>
					{
						(props.discription
						&& props.discription.length > 900
						&& <p>{props.discription.slice(0, 900)}</p>)
						|| <p>{props.discription}</p>}
				</div>
			</div>
		</div>
	)
}

function AuthorBlogs() {

}

const Author = () => {
	const {id} = useParams();
	const {data: author, error, isPending} = useFetch('http://localhost:8000/authors/' + id);
	const {data: blogs} = useFetch('http://localhost:8000/blogs');
	let authorBlog;
	if (blogs) {
		authorBlog = blogs.filter((blog) => blog.author === author.id)
	}
	return (
		<div>
			<AuthorComponent {...author} />
			{blogs && <BlogList blogs={authorBlog} title={`${author.name} ${author.lastname} blogs`} isAuthor={false}/>}
		</div>
	);
}
export default Author;