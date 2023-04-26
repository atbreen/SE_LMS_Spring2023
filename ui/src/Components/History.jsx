import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useUserHistory } from "../Context/DB";

export function History() {
  const history = useUserHistory("0001");
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
                  {h.duedate && h.duedate < new Date().toISOString()
                    ? "Overdue"
                    : "In Good Standing"}
                </TableCell>
                <TableCell>
                  {!h.duedate ? null : h.duedate < new Date().toISOString() ? (
                    <Button>Pay Fine</Button>
                  ) : (
                    <Button>Return</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
