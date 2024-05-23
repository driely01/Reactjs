import './author.css'
import BlogList from './BlogList';

const Author = () => {
	return (
		<div className="author">
			<div className="profile-container">
				<div className="profile">
					<img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
				</div>
				<div className="author-infos">
					<h2>john week</h2>
					<p>Curabitur accumsan leo a dictum ultricies. Ut massa elit, sagittis vitae bibendum id, congue vitae mi. Mauris vel libero laoreet, fermentum velit non, eleifend orci. Suspendisse quis tempus lectus, et venenatis risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a velit id turpis auctor rutrum. Donec tempus rutrum pharetra.</p>
				</div>
			</div>
			<div className="author-search">
				<input type="text" placeholder='search for blogs' />
				<button className="search-btn">search</button>
			</div>
			<div>
			</div>
		</div>
	);
}
export default Author;