import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header";

import image from "../../assets/balde5.jpg";

import FlavorRegister from './FlavorRegister'

function Flavor() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div>
        <img
          src={image}
          alt="imagem principal"
          className={classes.containerImg}
        />
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid item xs={12}>
            <Paper className={classes.cardApp}>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                className={classes.cardAppText}
              >
                Cadastro de Sabor
              </Typography>
            </Paper>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <FlavorRegister />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default Flavor;

const useStyles = makeStyles((theme) => ({
  containerImg: {
    width: "100%",
    height: "auto",
  },
  cardApp: {
    background: "#5E35B1",
    padding: theme.spacing(2),
    color: "#fff",
    marginBottom: 10,
  },
  cardAppText: {
    fontSize: 26,
    fontWeight: 500,
  },
  root: {
    flexGrow: 1,
    marginTop: -140,
    position: "relative",
  },
  paper: {
    margin: "auto",
    maxWidth: 600,
    color: theme.palette.text.secondary,
  },
}));
