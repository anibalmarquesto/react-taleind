import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function  CheckoutPage  ()  {
  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            Total
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
