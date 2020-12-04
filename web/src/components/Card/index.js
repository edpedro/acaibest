import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import imgAcai from "../../assets/balde2.jpg";
import ImageAvatar from "../Avatar";
import Detail from "./Detail";

function CardHome({ order }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ImageAvatar width={14} height={14} image={imgAcai} />
      <CardContent>
        <Typography variant="h6" component="p">
          Pedido {order.number_order}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.person}
        >
          {order.name}, {order.sizebucket}
        </Typography>
        <Typography variant="h4" component="p" className={classes.price}>
          R$ <span className={classes.priceNumber}>{order.price_total}</span>,00
        </Typography>
        <Detail order={order} />
      </CardContent>
      <CardActions disableSpacing className={classes.iconTemp}>
        <CardActions disableSpacing>
          <AccessTimeIcon />
          <Typography variant="overline" display="block" component="p">
            5m
          </Typography>
        </CardActions>
      </CardActions>
    </Card>
  );
}

export default CardHome;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 462,
    height: 238,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 30,
  },
  media: {
    height: 150,
    borderRadius: "50%",
    width: 200,
    marginLeft: 20,
  },
  iconTemp: {
    display: "flex",
    alignSelf: "flex-start",
    marginRight: 10,
  },
  price: {
    fontWeight: "700!important",
    fontSize: "1.1rem",
    marginTop: 20,
  },
  priceNumber: {
    fontSize: "1.6rem",
  },
  person: {
    marginTop: 20,
  },
}));
