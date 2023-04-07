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

export function Search() {
	return (
		<>
			<Card sx={{ p: 4, m: 4 }}>
				<Typography variant='h5' sx={{ pb: 2 }}>
					Search Library Media
				</Typography>
				<TextField
					label='Search'
					placeholder='Search Library Media, title, author, ISBN, etc.'
					fullWidth
					sx={{ mb: 2 }}
				/>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Catagory</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Author/Creator</TableCell>
							<TableCell>ISBN</TableCell>
							<TableCell>Genre</TableCell>
							<TableCell>Available Copies</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Book</TableCell>
							<TableCell>Woah, A Book! A Memoir</TableCell>
							<TableCell>Person Humanson</TableCell>
							<TableCell>02-1115643</TableCell>
							<TableCell>Non-Fiction</TableCell>
							<TableCell>10</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>E-Book</TableCell>
							<TableCell>I had More to Say. Another Memoir</TableCell>
							<TableCell>Person Humanson</TableCell>
							<TableCell>02-1164643</TableCell>
							<TableCell>Non-Fiction</TableCell>
							<TableCell>2</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Book</TableCell>
							<TableCell>
								I guess I could be done now. Yet another Memoir
							</TableCell>
							<TableCell>Person Humanson</TableCell>
							<TableCell>02-1680143</TableCell>
							<TableCell>Non-Fiction</TableCell>
							<TableCell>0</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
