import { History, Home, Logout, Person, Search } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function CommonMenu() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h5'>Library Management System</Typography>
				<Box flexGrow={1} textAlign='right'>
					<Button
						color='inherit'
						LinkComponent={Link}
						to='/'
						startIcon={<Home />}
					>
						Home
					</Button>
					<Button
						color='inherit'
						LinkComponent={Link}
						to='/search'
						startIcon={<Search />}
					>
						Search
					</Button>
					<Button
						color='inherit'
						LinkComponent={Link}
						to='/history'
						startIcon={<History />}
					>
						History
					</Button>
					<Button
						color='inherit'
						LinkComponent={Link}
						to='/users'
						startIcon={<Person />}
					>
						Users
					</Button>
					<Button
						color='inherit'
						LinkComponent={Link}
						to='/login'
						startIcon={<Logout />}
					>
						Logout
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
