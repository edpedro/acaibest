import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import { FlavorRegister } from "../../../store/modules/flavor/actions";
import { alertShow } from "../../../store/modules/alert/actions";

function Flavor() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [flavor, setFlavor] = useState({
    name: "",
    price: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFlavor((flavor) => ({ ...flavor, [name]: value }));
  }
  function handleSubmint(event) {
    event.preventDefault();

    if (flavor.name && flavor.price) {
      dispatch(FlavorRegister(flavor));
      
    } else {
      dispatch(
        alertShow({
          type: "danger",
          title: "Favor preencher todos campos",
          message: "Sabor não cadastrado",
        })
      );
    }

  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Cadastro de Sabor
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmint}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ex.. Morango"
            name="name"
            autoFocus
            defaultValue="Reset"
            value={flavor.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="price"
            label="Preço"
            type="number"
            id="price"
            defaultValue="Reset"
            autoComplete="current-price"
            onChange={handleChange}
            value={flavor.price}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Flavor;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
