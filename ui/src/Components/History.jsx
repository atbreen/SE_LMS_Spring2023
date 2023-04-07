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

export function History() {
	return (
		<>
			<Card sx={{ p: 4, m: 4 }}>
				<Typography variant='h5' sx={{ pb: 2 }}>
					Previously Checked Out Media
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
							<TableCell>11/11/2022</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>This is Also A Book Title</TableCell>
							<TableCell>Jack Humanson</TableCell>
							<TableCell>12/11/2012</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>This is Indeed Another Book Title</TableCell>
							<TableCell>Maude Humanson</TableCell>
							<TableCell>12/11/2022</TableCell>
							<TableCell>Overdue</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>How to Make the Best Pancakes, EVER!</TableCell>
							<TableCell>Martha Flowers</TableCell>
							<TableCell>10/11/2022</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>How to Make the Best Pancakes, EVER!</TableCell>
							<TableCell>Martha Flowers</TableCell>
							<TableCell>09/11/2022</TableCell>
							<TableCell>Lost - Fine Paid</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>So You Think You Can Falafel</TableCell>
							<TableCell>Alberto Smith</TableCell>
							<TableCell>06/15/2022</TableCell>
							<TableCell>In Good Standing</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
