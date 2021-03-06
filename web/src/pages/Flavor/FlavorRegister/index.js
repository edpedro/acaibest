import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import { FlavorRegister } from "../../../store/modules/flavor/actions";
import { alertShow } from "../../../store/modules/alert/actions";

function FlavorRegis() {
  const { updateFlavor } = useSelector((state) => state.flavor);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [flavor, setFlavor] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    if (updateFlavor) {
      setFlavor({
        name: updateFlavor.name,
        price: updateFlavor.price,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFlavor]);
  function handleChange(event) {
    const { name, value } = event.target;
    setFlavor((flavor) => ({ ...flavor, [name]: value }));
  }
  function handleSubmint(event) {
    event.preventDefault();

    if (flavor.name && flavor.price) {
      dispatch(FlavorRegister(flavor, updateFlavor.id));
      setFlavor({
        name: "",
        price: "",
      });
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

export default FlavorRegis;

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
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
}));
