import { Grid2 } from "@mui/material";
import { LoginForm } from "../components/login-form.component";

export default function LoginPage() {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 1, md: 3 }} />
      <Grid2 size={{ xs: 10, md: 6 }}>
        <LoginForm />
      </Grid2>
      <Grid2 size={{ xs: 1, md: 3 }} />
    </Grid2>
  );
}
