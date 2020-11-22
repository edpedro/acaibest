import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
});

export default function Cards() {
  const classes = useStyles();

  return (
    <>
      <Card>
        <CardContent className={classes.cardConten}>
          <Typography variant="subtitle2" component="h2">
            Selecione o sabor
            <strong> 0 de 1</strong>
          </Typography>
          <Typography variant="subtitle2" component="h2">
            Obrigatório
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
