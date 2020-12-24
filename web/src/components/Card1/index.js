import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import imgAcai from "../../assets/balde3.jpg";
import ImageAvatar from "../Avatar";
import Detail from "./Detail";
import ModalStatus from '../../components/ModalStatus'

export default function CardHome(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item className={classes.image}>
            <ImageAvatar width={16} height={16} image={imgAcai} />
          </Grid>
          <Grid item xs={7} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" component="p">
                  Pedido {props.order.number_order}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.order.name}, {props.order.sizebucket}
                </Typography>
                <Detail order={props.order} />
                <Grid item className={classes.time}>
                  <AccessTimeIcon />
                  <Typography variant="overline" component="p">
                    5m
                  </Typography>
                </Grid>
                <Typography
                  variant="h4"
                  component="p"
                  className={classes.price}
                >
                  R$
                  <span className={classes.priceNumber}>
                    {props.order.price_total}
                  </span>
                  ,00
                </Typography>
              </Grid>
              <Grid item className={classes.cardButton}>
                {props.order.status ? (
                  <ModalStatus title="Cancelar" color="#ffd600" colorText="#000" order={props.order}/>
                ):(
                  <ModalStatus title="Ativar" color="#FF0040" colorText="#fff" order={props.order}/>
                )}                
                {/* <ModalStatus title="Pagar" color="#00c853" /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  priceNumber: {
    fontSize: "1.6rem",
  },
  price: {
    fontWeight: "700!important",
    fontSize: "1.1rem",
    marginTop: 10,
  },
  iconTemp: {
    display: "flex",
    flexDirection: "row",
  },
  cardButton: {
    display: "flex",
    marginTop: 10,
  },
  image: {
    marginTop: 25,
  },
  time: {
    display: "flex",
  },
}));
