import {
	Alert,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

export function Home() {
	return (
		<>
			<Alert severity='warning'>Warning: You have overdue media!</Alert>
			<Card sx={{ p: 4, m: 4 }}>
				<Typography variant='h5' sx={{ pb: 2 }}>
					Currently Checked Out Media
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Author/Creator</TableCell>
							<TableCell>Due Date</TableCell>
							<TableCell>Renewal Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>This is A Book Title</TableCell>
							<TableCell>Person Humanson</TableCell>
							<TableCell>11/11/2023</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>This is Also A Book Title</TableCell>
							<TableCell>Jack Humanson</TableCell>
							<TableCell>11/11/2023</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>This is Indeed Another Book Title</TableCell>
							<TableCell>Maude Humanson</TableCell>
							<TableCell>2/11/2023</TableCell>
							<TableCell>Overdue</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
