import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

import Card1 from "../../components/Card1";

import Header from "./Header";

import { OrderGet } from "../../store/modules/order/actions";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ordersData, orders, orderStatus } = useSelector((state) => state.order);
  

  useEffect(() => {
    dispatch(OrderGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, orderStatus]);
  return (
    <>
      <Header />
      <div className={classes.line}></div>
      <Container maxWidth="lg">
      <div>
        <div className={classes.buttonOrder}>
          {ordersData.length < 0 && (
            <>
              <Fab
                color="primary"
                aria-label="add"
                style={{ background: "#5E35B1" }}
              >
                <AddIcon />
              </Fab>
              <Typography variant="subtitle2">Realizar pedido</Typography>
            </>
          )}
        </div>
        <Grid container spacing={3}>
          {ordersData.map((order, key) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={key}>             
              <Card1 order={order} />
            </Grid>
          ))}
        </Grid>       
      </div>
      </Container>
    </>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({ 
  line: {
    maxWidth: "100%",
    border: "1px solid #E0E0E0",
    marginTop: "10px",
    marginBottom: "20px",
  },
  buttonOrder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
