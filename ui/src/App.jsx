import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { CommonMenu } from "./Components/CommonMenu";

export default function App() {
	return (
		<HashRouter>
			<CommonMenu />
			<Switch>
				<Route path='/' exact>
					Home
				</Route>
				<Route path='/login' exact>
					Login
				</Route>
				<Route path='/signup' exact>
					Sign Up
				</Route>
				<Route path='/history' exact>
					History
				</Route>
				<Route path='/users' exact>
					Users
				</Route>
				<Route path='/search' exact>
					Search
				</Route>
				<Redirect to='/' />
			</Switch>
		</HashRouter>
	);
}
