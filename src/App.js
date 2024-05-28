import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NotFound from './NotFound';
import { Toaster } from 'react-hot-toast';
import Author from './Author'

function App() {
	return (
		<Router>
			<Toaster />
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="/authors/:id">
							<Author />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;