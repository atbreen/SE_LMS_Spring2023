import {
  Alert,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useHandleAddBorrow, useSearchMedia } from "../Context/DB";

export function Search() {
  const handleAddBorrow = useHandleAddBorrow();
  const [searchString, setSearchString] = useState("");
  const media = useSearchMedia(searchString);

  const [open, setOpen] = useState(false);
  const handleCheckout = useCallback(
    (item) => () => {
      setOpen(item);
    },
    []
  );
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  // eslint-disable-next-line
  const handleAccept = useCallback(() => {
    if (!open) return;
    // eslint-disable-next-line
    handleAddBorrow("0001", open.bookid);
    setOpen(false);
    // eslint-disable-next-line
  }, [open]);
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
                    <Button onClick={handleCheckout(item)} aria-label="add">
                      Borrow
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : searchString.length > 0 ? (
          <Typography>No Results</Typography>
        ) : null}
      </Card>
      <Dialog open={!!open} onClose={handleClose}>
        <DialogTitle>Borrow Media</DialogTitle>
        <DialogContent>
          <Typography>
            <h4>
              Would you like to borrow <em>{open?.title}</em> ?{" "}
            </h4>
          </Typography>
          <Typography>
            The date is <strong>{new Date().toLocaleDateString()} </strong> and
            your borrowed media will be due back{" "}
            <strong>
              {" "}
              {new Date(
                new Date().valueOf() + 1000 * 60 * 60 * 24 * 7
              ).toLocaleDateString()}
            </strong>
            <br />
            <br />
          </Typography>
          <Alert severity="info">
            <strong>NOTE:</strong> By clicking confirm, you are agreeing to the
            Library's Terms & Conditions including the payment of late fees if
            media is not returned, or borrow period is not extended by the due
            date.
            <br />
            <em>Late fee = $0.05 per day.</em>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAccept} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
