import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/Authentication/Form/SignIn';
import SignUp from './Components/Authentication/Form/SignUp';
import Home from './Components/FrontPages/Home/Home';
import Admin from './Components/AdminPages/Admin';


function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/"> <Home /> </Route>
					<Route path="/Home"> <Home /> </Route>
					<Route path="/Admin"> <Admin /> </Route>
					<Route path="/SignIn"> <SignIn /> </Route>
					<Route path="/SignUp"> <SignUp /> </Route>
					<Route path="*"> <NotFound /> </Route>
				</Switch>
			</Router>
		</>

	);
}

export default App;
