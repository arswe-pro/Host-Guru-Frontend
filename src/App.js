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
import loader from './images/loader.gif';
import PrivateRoute from './Components/Authentication/Auth/PrivateRoute';
import Auth, { AuthContextProvider } from './Components/Authentication/Auth/useAuth';
import { createContext } from 'react';

export const UserContext = createContext();

function App() {
	const auth = Auth();

	return (
		auth.user === undefined || auth.user ?
			<AuthContextProvider>
				<Router>
					<Switch>
						<Route exact path="/"> <Home /> </Route>
						<Route path="/Home"> <Home /> </Route>
						<Route path="/About"> <About /> </Route>
						<Route path="/Service"> <Service /> </Route>
						<Route path="/Price"> <Price /> </Route>
						<PrivateRoute  path="/Orders/:id"> <Orders /> </PrivateRoute>
						<Route path="/Project"> <Project /> </Route>
						<Route path="/Client"> <Client /> </Route>
						<PrivateRoute  path="/Admin"> <Admin /> </PrivateRoute>
						<Route path="/SignIn"> <SignIn /> </Route>
						<Route path="/SignUp"> <SignUp /> </Route>
						<Route path="*"> <NotFound /> </Route>
					</Switch>
				</Router>
			</AuthContextProvider>
			:
			<div style={{ textAlign: 'center' }}>
				<img src={loader} alt="loader" />
			</div>
	);
}

export default App;
