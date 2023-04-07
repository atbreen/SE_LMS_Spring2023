import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { CommonMenu } from "./Components/CommonMenu";
import { History } from "./Components/History";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Search } from "./Components/Search";
import { Signup } from "./Components/Signup";
import { Users } from "./Components/Users";

const theme = createTheme();

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<CommonMenu />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/login' exact>
						<Login />
					</Route>
					<Route path='/signup' exact>
						<Signup />
					</Route>
					<Route path='/history' exact>
						<History />
					</Route>
					<Route path='/users' exact>
						<Users />
					</Route>
					<Route path='/search' exact>
						<Search />
					</Route>
					<Redirect to='/' />
				</Switch>
			</HashRouter>
		</ThemeProvider>
	);
}
