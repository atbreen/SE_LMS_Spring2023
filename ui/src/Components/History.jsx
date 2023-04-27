import {
  Alert,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useUserHistory } from "../Context/DB";
import { useCallback, useState } from "react";

function getLateDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

export function History() {
  const history = useUserHistory("0001");
  const todayDate = new Date().toISOString();

  const [open, setOpen] = useState(false);
  const handleLateFees = useCallback(
    (item) => () => {
      setOpen(item);
    },
    []
  );
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Card sx={{ p: 4, m: 4 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Previously Checked Out Media
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author/Creator</TableCell>
              <TableCell>Date Borrowed</TableCell>
              <TableCell>Date Due</TableCell>
              <TableCell>Renewal Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((h) => (
              <TableRow key={h.dateborrowed}>
                <TableCell>{h.book.title}</TableCell>
                <TableCell>{h.book.author}</TableCell>
                <TableCell>
                  {new Date(h.dateborrowed).toLocaleString()}
                </TableCell>
                <TableCell>
                  {h.duedate && new Date(h.duedate).toLocaleString()}
                </TableCell>
                <TableCell>
                  {h.duedate && h.duedate < new Date().toISOString() ? (
                    <Typography>
                      <strong>
                        {getLateDays(h.duedate, todayDate)} Days Overdue
                      </strong>
                    </Typography>
                  ) : (
                    "In Good Standing"
                  )}
                </TableCell>
                <TableCell>
                  {!h.duedate ? null : h.duedate < new Date().toISOString() ? (
                    <Button onClick={handleLateFees(h)}>Pay Fine</Button>
                  ) : (
                    <Button>Return</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {history.map((h) => (
        <Dialog open={!!open} onClose={handleClose}>
          <DialogTitle>Pay Late Fees</DialogTitle>
          <DialogContent>
            <Typography>
              <h4>
                Your media is {getLateDays(open.duedate, todayDate)} day(s)
                overdue. Your late fees for this borrow are $
                {0.05 * getLateDays(open.duedate, todayDate)}
              </h4>
            </Typography>
            <Typography>
              <Alert severity="warning">
                <Typography>
                  By checking this box you are authorizing the above amount to
                  be charged to your payment method on file. Click Confirm to
                  continue.
                </Typography>
                <FormControlLabel
                  control={<Checkbox />}
                  labelPlacement="end"
                  label="I Agree"
                />
              </Alert>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onclick={handleClose} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      ))}
    </>
  );
}
