import {
	Alert,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";

export function Users() {
	return (
		<>
			<Card sx={{ p: 4, m: 4 }}>
				<Typography variant='h5' sx={{ pb: 2 }}>
					Search Library Media
				</Typography>
				<TextField
					label='Search Users - Admin Only'
					placeholder='Search for users, name, phone number, email, etc.'
					fullWidth
					sx={{ mb: 2 }}
				/>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>User ID</TableCell>
							<TableCell>Full Name</TableCell>
							<TableCell>Phone Number</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Overdue Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>0001</TableCell>
							<TableCell>Jackie Moore</TableCell>
							<TableCell>222-636-5858</TableCell>
							<TableCell>jmoore@email.com</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>0601</TableCell>
							<TableCell>Jack Dunham</TableCell>
							<TableCell>222-863-5548</TableCell>
							<TableCell>jdunham@email.com</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>7706</TableCell>
							<TableCell>Jackelynn Cunningham</TableCell>
							<TableCell>222-9993-5318</TableCell>
							<TableCell>cunninghamjackelynn@email.com</TableCell>
							<TableCell>Delinquent</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
