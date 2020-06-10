import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function TrelloCard({ text }) {
  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  );

  
}
const styles = {
    cardContainer: {
      marginBottom: 8,
    },
  };