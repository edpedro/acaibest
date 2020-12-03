import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { Getbucket } from "../../store/modules/bucket/actions";
import { OrderRegister } from "../../store/modules/order/actions";

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
  description: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
}));

function Modal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.bucket);
  const [data, setData] = useState({
    number_order: Math.floor(1000 + Math.random() * 9000),
    name: "",
    personalize: [],
    sizebucket: [],
    price_flavor: 0,
    price_sizeBucket: 0,
    price_person: 0,    
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(Getbucket());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  function handleSubmint(event) {
    event.preventDefault();

    dispatch(OrderRegister(data));
  }
  return (
    <>      
      <ButtonOrder handleClickOpen={handleClickOpen} title="Realizar pedido" />
      <Dialog open={open} onClose={handleClose} className={classes.root}>
        <form noValidate onSubmit={handleSubmint}>
          <DialogContent className={classes.formControl}>
            <DialogTitle className={classes.title}>
              <Typography variant="h4" gutterBottom>
                Adicionar Pedido
              </Typography>
              <DialogTitle className={classes.img}>
                <ImageAvatar width={14} height={14} image={imgAcai} />
              </DialogTitle>
            </DialogTitle>

            <RadioIcon
              buckets={buckets}
              onChange={(value) => setData(value)}
              data={data}
            />
          </DialogContent>
          <DialogActions className={classes.modalButton}>
            <DialogActions className={classes.description}>
              <Typography variant="subtitle1" component="p">
                {data.name}, {data.sizebucket}
              </Typography>
              <Typography variant="body2" component="p">
                {data.personalize.join()}
              </Typography>
              <Typography variant="h4" component="p" className={classes.price}>
                R${" "}
                <span className={classes.priceNumber}>
                  {data.price_flavor +
                    data.price_person +
                    data.price_sizeBucket}
                </span>
                ,00
              </Typography>
            </DialogActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              onClick={handleClose}
            >
              Finalizar Pedido
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default Modal;
