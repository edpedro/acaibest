import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import image from "../../assets/balde5.jpg";
import logo from "../../assets/logo.png";

import CardRegister from "./CardRegister";

function RegisterBucket() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Typography>

            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Graficos
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Pedidos
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Usuarios
              </Link>
            </nav>
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.buttons}
            >
              Sair
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          <img
            src={image}
            alt="imagem principal"
            className={classes.containerImg}
          />
        </div>
        <div className={classes.cardRegist}>
          <CardRegister />
        </div>
      </div>
    </>
  );
}

export default RegisterBucket;

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  buttons: {
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
  containerImg: {
    width: "100%",
    height: "auto",
  },
  logo: {
    width: "120px",
  },
  cardRegist: {
    marginTop: -90,
  },
}));
