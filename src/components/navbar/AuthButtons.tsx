import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} style={{ width: "200px", marginRight: "15px" }}>
      <Grid item xs={6}>
        <Button
          onClick={() => navigate('/login')}
          variant="contained"
          style={{ background: "white", color: "blue" }}
        >
          <Typography>Login</Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => navigate('/register')}
          variant="contained"
          style={{ background: "white", color: "blue" }}
        >
          <Typography>Register</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthButtons;
