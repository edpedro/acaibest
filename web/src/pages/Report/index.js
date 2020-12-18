import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";

import Header from "../../components/Header";
import { OrderGet } from "../../store/modules/order/actions";
const data = [
  {
    name: "02/12",
    pedido: 11,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02/12",
    pedido: 11,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "03/12",
    pedido: 11,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "04/12",
    pedido: 10,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "05/12",
    pedido: 12,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "06/12",
    pedido: 10,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "07/12",
    pedido: 5,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "08/12",
    pedido: 10,
    pv: 4300,
    amt: 2100,
  },
];

export default function Report() {
  const dispatch = useDispatch();

  const { orderReport } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(OrderGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(orderReport);
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <div>         
          <h4>A demo of synchronized AreaCharts</h4>
          <LineChart
            width={500}
            height={200}
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
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="id"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
          <p>Maybe some other content</p>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Brush />
          </LineChart>
          <AreaChart
            width={500}
            height={200}
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
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="id"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
      </Container>
    </>
  );
}
