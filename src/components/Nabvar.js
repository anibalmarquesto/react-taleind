import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/Logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";




export default function Nabvar() {
  return (
   
      <Box sx={{flexGrow: 1}}>
        <AppBar position="statitic">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={Logo}
                className="Imagen"
                style={{ marginRight: "7px" }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              sx={{ flexGrow: 1 }}
            >
              Hello Gest
            </Typography>

            <Button color="inherit" className="Button">
              <strong>Sign In</strong>
            </Button>
            <IconButton aria-label="Show cart items" color="inherit">
           <Badge badgeContent = {2} color="secondary">         
               <AddShoppingCartIcon fontSize="large" color="primary" />
           </Badge>

            </IconButton>
           
           
          </Toolbar>
        </AppBar>
      </Box>
    
  );
}
