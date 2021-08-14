import {
	Button,
	DialogActions,
	DialogContent,
	MenuItem,
	TextField,
} from "@mui/material";
import { useCallback, useState } from "react";
import { createData } from "./utils";

export default function AddForm({ setRows, onClose }) {
	const handleSubmit = useCallback(
		(event) => {
			const data = new FormData(event.target);
			const MediaData = createData(
				data.get("Title"),
				data.get("Author"),
				data.get("ISBN"),
				data.get("Genre"),
				data.get("Type"),
				data.get("Available")
			);
			setRows((rows) => [...rows, MediaData]);
			event.preventDefault();
			onClose();
		},
		[setRows, onClose]
	);

	const [Title, setTitle] = useState("");
	const handleTitle = useCallback((event) => {
		setTitle(event.target.value);
	}, []);

	const [Author, setAuthor] = useState("");
	const handleAuthor = useCallback((event) => {
		setAuthor(event.target.value);
	}, []);

	const [ISBN, setISBN] = useState("");
	const handleISBN = useCallback((event) => {
		setISBN(event.target.value);
	}, []);

	const [Genre, setGenre] = useState("");
	const handleGenre = useCallback((event) => {
		setGenre(event.target.value);
	}, []);

	const [Type, setType] = useState("");
	const handleType = useCallback((event) => {
		setType(event.target.value);
	}, []);
	const [Available, setAvailable] = useState("");
	const handleAvailable = useCallback((event) => {
		setAvailable(event.target.value);
	}, []);

	const handleClear = useCallback(() => {
		setTitle("");
		setAuthor("");
		setISBN("");
		setGenre("");
		setType("");
		setAvailable("");
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<DialogContent
				sx={{
					"& .MuiInputBase-root": {
						marginBottom: 1,
					},
				}}
			>
				<TextField
					name='Title'
					label='Title'
					variant='outlined'
					fullWidth
					value={Title}
					onChange={handleTitle}
				/>
				<TextField
					name='Author'
					label='Author'
					variant='outlined'
					fullWidth
					value={Title}
					onChange={handleAuthor}
				/>

				<TextField
					name='ISBN'
					label='ISBN'
					variant='outlined'
					fullWidth
					value={Title}
					onChange={handleISBN}
				/>

				<TextField
					name='Genre'
					select
					label='Genre'
					variant='outlined'
					fullWidth
					value={Genre}
					onChange={handleGenre}
				>
					<MenuItem value='horror'>Horror</MenuItem>
					<MenuItem value='romance'>Romance</MenuItem>
					<MenuItem value='reference'>Reference</MenuItem>
					<MenuItem value='academic'>Academic</MenuItem>
					<MenuItem value='fantasy'>Fantasy</MenuItem>
					<MenuItem value='children'>Children</MenuItem>
					<MenuItem value='mystery'>Mystery</MenuItem>
					<MenuItem value='scifi'>Science Fiction</MenuItem>
				</TextField>
				<TextField
					name='Type'
					select
					label='Type'
					variant='outlined'
					fullWidth
					value={Type}
					onChange={handleType}
				>
					<MenuItem value='Physical'>Physical</MenuItem>
					<MenuItem value='Digital'>Digital</MenuItem>
				</TextField>
				<TextField
					name='Available'
					label='Available'
					variant='outlined'
					fullWidth
					value={Available}
					onChange={handleAvailable}
				/>
			</DialogContent>

			<DialogActions>
				<Button variant='contained' color='primary' type='submit'>
					Save
				</Button>
				<Button variant='contained' color='primary' onClick={handleClear}>
					Clear
				</Button>
			</DialogActions>
		</form>
	);
}
