import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function Signup() {
  return (
    <>
      <Card
        sx={{ p: 4, my: 4, textAlign: "center", maxWidth: 400, mx: "auto" }}
      >
        <Typography variant="h5" sx={{ pb: 2 }}>
          Create an Account
        </Typography>
        <Box mb={2}>
          <TextField label="First Name" placeholder="First Name" />
        </Box>
        <Box mb={2}>
          <TextField label="Last Name" placeholder="Last Name" />
        </Box>
        <Box mb={2}>
          <TextField label="Phone Number" placeholder="Phone Number" />
        </Box>
        <Box mb={2}>
          <TextField label="Email Address" placeholder="Email Address" />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            sx={{ mb: 2 }}
          />
        </Box>
        <Button
          Link
          component={RouterLink}
          to="/login"
          sx={{ mb: 2 }}
          variant="contained"
        >
          Create Account
        </Button>
        <Typography variant="body2">
          Already have an account?{" "}
          <Link component={RouterLink} to="/login">
            Login!
          </Link>
        </Typography>
      </Card>
    </>
  );
}
