import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function MediaCard({ title, desc, precio, img }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ height: 150 }} variant="body2" color="text.secondary">
          {desc}
          <br />
          <br />
          {precio} Bs.
        </Typography>
      </CardContent>
      <CardActions>
        <a
          href={
            "https://api.whatsapp.com/send?phone=76578052&text=%20Me%20intereso%20mucho%20el%20articulo%20podr%C3%ADas%20darme%20mayor%20informaci%C3%B3n%20" +
            title +
            "%20" +
            precio +
            "Bs"
          }
          target="_blank"
          className="text-black text-center w-full flex items-center justify-center gap-8 hover:text-gray-400"
        >
          <BsFillBagHeartFill /> Comprar
        </a>
      </CardActions>
    </Card>
  );
}
