import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/Authentication/Form/SignIn';
import SignUp from './Components/Authentication/Form/SignUp';
import Home from './Components/FrontPages/Home/Home';

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
import AdminPanel from './Components/AdminPages/AdminPanel';
import MakeAdmin from './Components/AdminPages/MakeAdmin';
import Review from './Components/FrontPages/OrderPage/Review';
import ManagedService from './Components/AdminPages/ManagedService';
import PaymentOption from './Components/FrontPages/OrderPage/PaymentOption';


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

						<Route path="/PaymentOption"> <PaymentOption /> </Route>

						<PrivateRoute  path="/serviceOrder/:id"> <Orders /> </PrivateRoute>

						<PrivateRoute path="/Review"> <Review /> </PrivateRoute>

						<Route path="/Project"> <Project /> </Route>

						<Route path="/Client"> <Client /> </Route>

						<PrivateRoute path="/AdminPanel"> <AdminPanel /> </PrivateRoute>

						<Route path="/MakeAdmin"> <MakeAdmin /> </Route>

						<Route path="/ManagedService"> <ManagedService /> </Route>


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
