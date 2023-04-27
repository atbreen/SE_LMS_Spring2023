import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function Login() {
  return (
    <>
      <Card
        sx={{ p: 4, my: 4, textAlign: "center", maxWidth: 400, mx: "auto" }}
      >
        <Typography variant="h5" sx={{ pb: 2 }}>
          Login
        </Typography>
        <Box mb={2}>
          <TextField label="Email Address" placeholder="Email Address" />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            sx={{ mb: 2 }}
          />
        </Box>
        <Button
          component={RouterLink}
          to="/"
          sx={{ mb: 2 }}
          variant="contained"
        >
          Login
        </Button>
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link component={RouterLink} to="/signup">
            Create one!
          </Link>
        </Typography>
      </Card>
    </>
  );
}
