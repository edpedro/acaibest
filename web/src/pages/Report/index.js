import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import Header from "../../components/Header";
import { OrderGet } from "../../store/modules/order/actions";


export default function Report() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { orderReport } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(OrderGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div className={classes.recharts}>
          <h1 className={classes.textTitle}>Relatorio: Pedido por data</h1>
          <LineChart
            width={730}
            height={250}
            data={orderReport}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pedido"
              stroke="#5E35B1"
              fill="#5E35B1"
            />
          </LineChart>
        </div>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  recharts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  textTitle:{
    fontSize: 24,
    fontWeight: 500
  }
}));
