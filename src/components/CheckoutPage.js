import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Products from "./Products";
import array from "../product-data";
import CheckoutCard from "./CheckoutCard";
import ProductoDeLaCard from "./Productos-De-La-Card";
import Total from "../components/Total";

export default function CheckoutPage() {
 

  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} conteiner spacing={2}>
         <ProductoDeLaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
        
      </Grid>
    </div>
  );
}
