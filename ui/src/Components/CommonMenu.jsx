import { Home } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";

export function CommonMenu() {
	<AppBar>
		<Toolbar>
			<Button startIcon={<Home />}>Home</Button>
		</Toolbar>
	</AppBar>;
}
