import { Add, Delete } from "@mui/icons-material";
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import AddForm from "./AddForm";
import { createData } from "./utils";

function MediaRow({ row, index, setRows }) {
	// could also be written as 'const MediaRow = ({ row, index }) => {....stuff....}'
	//destructuring - to take a param and get particular properties from the object. (aking the row property out of props which is the first parameter.)

	const handleDelete = useCallback(() => {
		// arrow function - just making up a function - what's going to happen when button is clicked
		setRows((rows) => rows.filter((r, i) => i !== index)); // filter returns new array with only matching items, (not the ones being picked to delete)
	}, [index, setRows]);
	return (
		// TODO: after checkboxes, create delete multiple button
		<TableRow>
			<TableCell component='th' scope='row'>
				{row.Title}
			</TableCell>
			<TableCell>{row.Author}</TableCell>
			<TableCell>{row.ISBN}</TableCell>
			<TableCell>{row.Genre}</TableCell>
			<TableCell>{row.Type}</TableCell>
			<TableCell>{row.Available}</TableCell>
			<TableCell>
				<IconButton aria-label='delete' onClick={handleDelete}>
					<Delete />
				</IconButton>
			</TableCell>
		</TableRow>
	);
}

export default function App() {
	const [rows, setRows] = useState([
		// rows = current state, setRows() = modify state, useState = hook
		createData(
			"Book 1",
			"Book Writer",
			"111111111",
			"Horror",
			"Hardcover",
			"12"
		),
		createData(
			"Insurgency: Sandstorm",
			"PC",
			"Steam",
			"Multiplayer Online COOP",
			"Digital"
		),
		createData("Lets Go! Eevee", "Switch", "", "Single Player", "Physical"),
		createData("Diablo", "PC", "GOG", "Multiplayer Online COOP", "Digital"),
		createData(
			"Northgard",
			"PC",
			"Steam",
			"Multiplayer Online COOP",
			"Digital"
		),
	]);

	const [open, setOpen] = useState(false);
	const handleAddClick = useCallback(() => {
		setOpen(true);
	}, []); // empty array -> no dependencies, this never needs to be recreated. ie, handleAddClick will always set open to true.
	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<>
			<Typography variant='h2' gutterBottom>
				Library Management System
			</Typography>
			<Box sx={{ textAlign: "right" }}>
				<Button
					onClick={handleAddClick}
					variant='contained'
					color='primary'
					startIcon={<Add />}
				>
					Add
				</Button>
			</Box>

			<Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
				<DialogTitle>Add Media</DialogTitle>
				<AddForm onClose={handleClose} setRows={setRows} />
			</Dialog>

			<TableContainer component={Paper}>
				<Table aria-label='simple table' sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Author</TableCell>
							<TableCell>ISBN</TableCell>
							<TableCell>Genre</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Available</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/*.map iterates over array (rows), creating a new array based on a function. Takes in row and index and returns a Mediarow.*/}
						{rows.map((row, index) => (
							<MediaRow row={row} key={index} index={index} setRows={setRows} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
