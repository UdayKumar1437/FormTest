import React from "react";
import { useForm } from "react-hook-form";
import { Box, Container, TextField, Button, Typography } from "@mui/material";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 3 }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Demo Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            size="small"
            label="Name"
            fullWidth
            margin="normal"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            size="small"
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default App;
