import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { OrderStatus } from "../../store/modules/order/actions";

export default function ModalStatus(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatus = (order) => {
    if (order.status) {
      dispatch(OrderStatus({ status: false }, order.number_order));
    } else {
      dispatch(OrderStatus({ status: true }, order.number_order));
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.root}
        style={{ background: props.color, color: props.colorText }}
        onClick={handleClickOpen}
      >
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.order.status ? (
          <DialogTitle id="alert-dialog-title">CANCELAR PEDIDO</DialogTitle>
        ) : (
          <DialogTitle id="alert-dialog-title">ATIVAR PEDIDO</DialogTitle>
        )}

        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="center">
            Numero {props.order.number_order} - {props.order.name},{" "}
            {props.order.sizebucket}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.button}
          >
            Fechar
          </Button>
          <Button
            onClick={() => handleStatus(props.order)}
            color="primary"
            autoFocus
            className={classes.button}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#5E35B1",
  },
  root: {
    width: 100,
    marginLeft: 4,
  },
}));
