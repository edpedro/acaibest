import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { FlavorGet } from "../../../store/modules/flavor/actions";
import { SizeBcuketRegister } from "../../../store/modules/sizeBucket/actions";
import { alertShow } from "../../../store/modules/alert/actions";


function SizeBucket() {
  const dispatch = useDispatch();
  const { getFlavor } = useSelector((state) => state.flavor);
  const classes = useStyles();
  const [flavor, setFlavor] = useState(""); 
  const [sizeNucket, setSizeNucket] = useState({
    id: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    dispatch(FlavorGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSelect = (event) => {
    setFlavor(event.target.value);
    const flavorId = getFlavor.filter((flavor) => {
      return flavor.name === event.target.value;
    });
    setSizeNucket({ ...sizeNucket, id: flavorId[0].id });
  };

  const handleChangeSelectSize = (event) => {  
    const { name, value } = event.target;
    setSizeNucket({ ...sizeNucket, [name]: value });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setSizeNucket((sizeNucket) => ({ ...sizeNucket, [name]: value }));
  }
  function handleSubmint(event) {
    event.preventDefault();

    if (sizeNucket.id && sizeNucket.name && sizeNucket.price) {
      dispatch(SizeBcuketRegister(sizeNucket));
      
    } else {
      dispatch(
        alertShow({
          type: "danger",
          title: "Favor preencher todos campos",
          message: "Tamanho não cadastrado",
        })
      );
    }

  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Cadastro do Tamanho
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmint}>
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Tamanho
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sizeNucket.name}
              onChange={handleChangeSelectSize}
              label="Tamanho"           
              name="name"
            >
              <MenuItem value="">
                <em>Tamanho</em>
              </MenuItem>
              <MenuItem  value="Pequeno (300ml)">Pequeno (300ml)</MenuItem>
              <MenuItem value="Médio (500ml)">Médio (500ml)</MenuItem>
              <MenuItem value="Grande (700ml)">Grande (700ml)</MenuItem>
            </Select>
          </FormControl>         
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
            value={sizeNucket.price}
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

export default SizeBucket;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
 
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
