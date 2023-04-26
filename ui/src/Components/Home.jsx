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
import { useBorrow } from "../Context/DB";
import { Link } from "react-router-dom";

export function Home() {
  const borrow = useBorrow("0001");
  return (
    <>
      <Alert severity="warning">
        <strong>Warning:</strong> You have overdue media! Please see the{" "}
        <Link to="/history">History</Link> page to pay any late fees.
      </Alert>
      <Card sx={{ p: 4, m: 4 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
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
            {borrow.map((b) => (
              <TableRow key={b.userid}>
                <TableCell>{b.book.title}</TableCell>
                <TableCell>{b.book.author}</TableCell>
                <TableCell>
                  {b.duedate && new Date(b.duedate).toLocaleString()}
                </TableCell>
                <TableCell>
                  {b.duedate && b.duedate < new Date().toISOString()
                    ? "Overdue"
                    : "In Good Standing"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
