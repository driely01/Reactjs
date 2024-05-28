import { Link } from 'react-router-dom';
import './notFound.css'

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>Oops! Something is wrong.</p>
			<Link to='/' className="button"><i className='icon-home'>Go back in initial page, is better.</i></Link>
		</div>
	);
}
export default NotFound;