import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import history from "../../../services/history";

import { PersonalizeUpdate } from "../../../store/modules/personalize/actions";
import { SizeBcuketUpdate } from "../../../store/modules/sizeBucket/actions";

export default function CardRegister() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handlerPerson() {
    dispatch(PersonalizeUpdate([]));
    history.push("/cadastrar/pesonalizacao");
  }
  function handleSize() {
    dispatch(SizeBcuketUpdate([]))
    history.push("/cadastrar/Tamanho");
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper
            className={classes.card}
            onClick={() => history.push("/cadastar/sabor")}
          >
            <Typography variant="h6">Cadastrar Sabor</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.card} onClick={handleSize}>
            <Typography variant="h6">Cadastrar Tamanho</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.card} onClick={handlerPerson}>
            <Typography variant="h6">Cadastrar Personalização</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  card: {
    padding: theme.spacing(2),
    cursor: "pointer",
    textAlign: "center",
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
}));
