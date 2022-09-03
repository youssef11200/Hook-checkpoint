import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function MediaCard({ movie }) {
  return (
    <Card style={{ maxWidth: 270, margin: "10px", backgroundColor: "#ffebcd" }}>
      <CardMedia
        className="image"
        component="img"
        height="450"
        image={movie.postUrl}
        alt="green iguana"
      />
      <CardContent className="content">
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography component="legend"></Typography>
        <Rating name="simple-controlled" value={movie.rate} />

        
      </CardContent>
    </Card>
  );
}
