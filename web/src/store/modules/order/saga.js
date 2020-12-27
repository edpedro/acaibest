import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { OrderRequest, OrderRegisterSuccess, OrderStatusSuccess } from "./actions";

import api from "../../../services/api";
import history from "../../../services/history";

function* orderGet() {
  try {
    const response = yield call(api.get, "/orders");
    const res = response.data;
    yield put(OrderRequest(res));
  } catch (error) {
    console.log(error);
  }
}


function* orderRegister({ data }) {
  try {
    const response = yield call(api.post, "orders", data);

    yield put(
      alertShow({
        type: "success",
        title: "Pedido realizado com sucesso !",
        message: `Numero do Pedido ${response.data.number_order}`,
      })      
    );
    yield put(OrderRegisterSuccess(response.data))
    history.push("/");
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao processa o pedido",
        message: "Tente novamente"
      })
    );
  }
}
function* orderStatus({ data, id }) { 
  try {
   yield call(api.put, `orders/${id}`, data);

    const msg = data.status ? "ativo": "cancelado"

    yield put(
      alertShow({
        type: "success",
        title: `Pedido ${msg} com sucesso!`,
        message: `Numero do Pedido ${id}`,
      })      
    );  
    yield put(OrderStatusSuccess(data))
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao cancelar o pedido",
        message: "Tente novamente"
      })
    );
  }
}

export default all([
  takeLatest(types.ORDER_REGISTER, orderRegister),
  takeLatest(types.ORDER_GET, orderGet),
  takeLatest(types.ORDER_STATUS, orderStatus),
]);
