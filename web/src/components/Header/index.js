import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/logo.png";

function Header() {
  const classes = useStyles();

  return (
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
            <Link to="/relatorio" className={classes.link}>
              Relatório
            </Link>
            <Link to="/" className={classes.link}>
              Pedidos
            </Link>
            <Link to="/listar" className={classes.link}>
              Listar
            </Link>
            <Link to="/usuarios" className={classes.link}>
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
    </div>
  );
}

export default Header;

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
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 14,
    color: "#000",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  buttons: {
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
  logo: {
    width: "120px",
  },
}));
