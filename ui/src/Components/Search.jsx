import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { useSearchMedia } from "../Context/DB";

export function Search() {
  const [searchString, setSearchString] = useState("");
  const media = useSearchMedia(searchString);
  return (
    <>
      <Card sx={{ p: 4, m: 4 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Search Library Media
        </Typography>
        <TextField
          label="Search"
          placeholder="Search Library Media, title, author, ISBN, etc."
          fullWidth
          sx={{ mb: 2 }}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        {media.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Catagory</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author/Creator</TableCell>
                <TableCell>ISBN</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell align="right">Available Copies</TableCell>
                <TableCell align="center">Checkout</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {media.map((item) => (
                <TableRow key={item.category}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.isbn}</TableCell>
                  <TableCell>{item.genre}</TableCell>
                  <TableCell align="right">{item.copies}</TableCell>
                  <TableCell align="center">
                    <AddCircleOutlineIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : searchString.length > 0 ? (
          <Typography>No Results</Typography>
        ) : null}
      </Card>
    </>
  );
}
