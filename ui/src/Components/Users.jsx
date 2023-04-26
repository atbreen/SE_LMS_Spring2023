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
import { useSearchUsers } from "../Context/DB";
import { useState } from "react";
// import { users } from "./users.json"

export function Users() {
  const [searchString, setSearchString] = useState("");
  const users = useSearchUsers(searchString);
  return (
    <>
      <Card sx={{ p: 4, m: 4 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Search Users
        </Typography>
        <TextField
          label="Search Users - Admin Only"
          placeholder="Search for users, name, phone number, email, etc."
          fullWidth
          sx={{ mb: 2 }}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        {users.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Overdue Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userid}>
                  <TableCell>{user.userid}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.phonenumber}</TableCell>
                  <TableCell>{user.emailaddress}</TableCell>
                  <TableCell>{user.status}</TableCell>
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
