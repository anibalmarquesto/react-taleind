import { Grid } from "@mui/material";
import { array } from "./product-data";
import Products from "./Products";
import CheckoutCard from "./CheckoutCard";


export default function ProductoDeLaCard () {
  return (
    <div className="row">
     <div className="clumn">
      <Grid container spacing={2}>

        
        {
        array.map((product, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <CheckoutCard product={product} />
            </Grid>
          );
        })}
      </Grid>
      </div>
    </div>
  );
}