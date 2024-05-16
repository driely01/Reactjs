import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
	const history = useHistory();
	return (
		<nav className="navbar">
			<h1 onClick={() => history.push('/')}>the bloger</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	);
}
export default Navbar;