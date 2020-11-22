import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";

import ButtonOrder from "../Buttons";
import ImageAvatar from "../Avatar";
import imgAcai from "../../assets/balde1.jpg";
import RadioIcon from "./Radio";
import Checkboxes from "./Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  formControl: {
    width: 480,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    marginLeft: "20%",
  },
  modalButton: {
    display: "flex",  
    flexDirection: "column",
  },
  button: {
    padding: theme.spacing(1, 25),
    borderRadius: 10,
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
  price: {
    fontWeight: "700!important",
    fontSize: "1.1rem",   
  },
  priceNumber: {
    fontSize: "1.6rem",
  },
  description:{
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
}));

function Modal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonOrder handleClickOpen={handleClickOpen} title="Realizar pedido" />
      <Dialog open={open} onClose={handleClose} className={classes.root}>
        <DialogContent className={classes.formControl}>
          <DialogTitle className={classes.title}>
            <Typography variant="h4" gutterBottom>
              Adicionar Pedido
            </Typography>
            <DialogTitle className={classes.img}>
              <ImageAvatar width={14} height={14} image={imgAcai} />
            </DialogTitle>
          </DialogTitle>
          <form noValidate className={classes.form}>
            <RadioIcon name1="Morango" name2="Banana" name3="Kiwi" />
            <RadioIcon  name1="Pequeno (300ml)" name2="Médio (500ml)" name3="Grande (700ml)" />
            <Checkboxes />
          </form>
        </DialogContent>
        <DialogActions className={classes.modalButton}>
          <DialogActions className={classes.description}>
            <Typography variant="subtitle1" component="p">
              Morango, Pequeno (300ml)
            </Typography>
            <Typography variant="body2" component="p">
            Granola (R$ 0,00), Paçoca (R$ 3,00), Leite ninho (R$ 3,00)
            </Typography>
            <Typography variant="h4" component="p" className={classes.price}>
              R$ <span className={classes.priceNumber}>10</span>,00
            </Typography>
          </DialogActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Finalizar Pedido
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
