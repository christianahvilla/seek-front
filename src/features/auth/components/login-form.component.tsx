import { useForm } from "react-hook-form";
import { Button, TextField, Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
// import { loginService } from "../services/auth.service";
import { mockLoginService as loginService } from "../services/mock-login.service";
import { useNavigate } from "react-router-dom";
import { extractErrorMessage } from "../../../utils/handle-error.util";

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Email Required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password Required"),
});

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormInputs): Promise<void> => {
    try {
      await loginService(data);
      navigate("/dashboard");
    } catch (error: unknown) {
      setErrorMessage(extractErrorMessage(error));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 6,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Sign In
      </Typography>

      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Contraseña"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {errorMessage && (
        <Typography color="error" variant="body2">
          {errorMessage}
        </Typography>
      )}

      <Button type="submit" variant="contained" disabled={isSubmitting}>
        {isSubmitting ? "Sending" : "Login"}
      </Button>
    </Box>
  );
};
