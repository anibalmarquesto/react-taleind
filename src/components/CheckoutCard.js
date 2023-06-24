import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Estrellitas from "./Estrellitas";
import { dividerClasses } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckoutCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { product } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return product ? (
    <div className="conteiner">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <Typography variant="h5" color="textSecondary">
              {product.price}
            </Typography>
          }
          title={props.name}
          subheader=" in Stock"
        />
        <CardMedia
          component="img"
          image={product.image}
          alt="Zapatillas"
          style={{ height: 154 }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.producType}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
          
          <IconButton aria-label="share">
            <Estrellitas />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  ) : (
    <></>
  );
}
