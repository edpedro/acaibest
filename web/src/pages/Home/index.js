import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import Card from "../../components/Card";
import Header from "../../components/Header";

import { OrderGet } from "../../store/modules/order/actions";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ordersData } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(OrderGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordersData]);
  return (
    <>
      <Header />
      <div className={classes.line}></div>
      <div className={classes.card}>
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
        {ordersData.map((order, key) => (
          <Card order={order} key={key} />
        ))}
      </div>
    </>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowX: "hidden",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
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
