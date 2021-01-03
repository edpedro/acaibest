import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Cards(props) {
  const classes = useStyles();

  return (
    <>
      <Card>
        <CardContent className={classes.cardConten}>
          <Typography variant="subtitle2" component="h2" className={classes.text}>
            {props.title}           
          </Typography>
          <Typography variant="subtitle2" component="h2" className={classes.text}>
            {props.required}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

const useStyles = makeStyles({
  cardConten: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text:{
    fontSize: 15,
    fontWeight: 800
  }
});
