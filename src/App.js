import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/Authentication/Form/SignIn';
import SignUp from './Components/Authentication/Form/SignUp';
import Home from './Components/FrontPages/Home/Home';
import Admin from './Components/AdminPages/Admin';
import About from './Components/FrontPages/About/About';
import Service from './Components/FrontPages/Service/Service';
import Project from './Components/FrontPages/Project/Project';
import Price from './Components/FrontPages/Pricing/Price';
import Client from './Components/FrontPages/Client/Client';
import Orders from './Components/FrontPages/OrderPage/Orders';


function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/"> <Home /> </Route>
					<Route path="/Home"> <Home /> </Route>
					<Route path="/About"> <About /> </Route>
					<Route path="/Service"> <Service /> </Route>
					<Route path="/Price"> <Price /> </Route>
					<Route path="/Orders/:id"> <Orders /> </Route>
					<Route path="/Project"> <Project /> </Route>
					<Route path="/Client"> <Client /> </Route>
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
