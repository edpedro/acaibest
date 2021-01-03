import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { FlavorGet } from "../../../store/modules/flavor/actions";
import { PersonalizeRegister } from "../../../store/modules/personalize/actions";
import { alertShow } from "../../../store/modules/alert/actions";

function Person() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { getFlavor } = useSelector((state) => state.flavor);
  const { updatePesonalizes } = useSelector((state) => state.personalize);

  const [flavor, setFlavor] = useState("");
  const [personalize, setPersonalize] = useState({
    id: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    dispatch(FlavorGet());

    if (updatePesonalizes) {
      setPersonalize({
        name: updatePesonalizes.name,
        price: updatePesonalizes.price,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSelect = (event) => {
    setFlavor(event.target.value);
    const flavorId = getFlavor.filter((flavor) => {
      return flavor.name === event.target.value;
    });
    setPersonalize({ ...personalize, id: flavorId[0].id });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalize((personalize) => ({ ...personalize, [name]: value }));
  };

  function handleSubmint(event) {
    event.preventDefault();

    if (personalize.name && personalize.price) {
      dispatch(PersonalizeRegister(personalize, updatePesonalizes.id));
      setPersonalize({ name: "", price: "" });
    } else {
      dispatch(
        alertShow({
          type: "danger",
          title: "Favor preencher todos campos",
          message: "Personalização não cadastrado",
        })
      );
    }
  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <form className={classes.form} noValidate onSubmit={handleSubmint}>
          {updatePesonalizes.length >= 0 ? (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sabor
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={flavor}
                onChange={handleChangeSelect}
                label="Sabor"
                autoFocus
              >
                <MenuItem value="">
                  <em>Sabor</em>
                </MenuItem>
                {getFlavor.map((falvor, key) => (
                  <MenuItem key={key} value={falvor.name}>
                    {falvor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            ""
          )}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ex.. Granola"
            name="name"
            autoComplete="fullWidth"
            value={personalize.name}
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
            autoComplete="current-password"
            value={personalize.price}
            onChange={handleChange}
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

export default Person;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: "100%",
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
