import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { PersonalizeDelete } from "../../store/modules/personalize/actions";
import { SizeBcuketDelete } from "../../store/modules/sizeBucket/actions";

export default function ModalDelete(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (props.data.flavors_personalizes) {
      dispatch(PersonalizeDelete(props.data, props.bucket));
    } else {
      dispatch(SizeBcuketDelete(props.data, props.bucket));
    }
    setOpen(false);
  };

  return (
    <div>
      <DeleteIcon
        style={{ color: "#ff1744", cursor: "pointer" }}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="center">
            {props.data.name} - R${props.data.price}
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
            onClick={handleDelete}
            color="primary"
            autoFocus
            className={classes.button}
          >
            Deletar
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
}));
