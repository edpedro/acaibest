import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { OrderRequest } from "./actions";

import api from "../../../services/api";
import history from "../../../services/history";

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
function* orderGet() {
  try {
    const response = yield call(api.get, "/orders");
    const res = response.data;
    yield put(OrderRequest(res));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(types.ORDER_REGISTER, orderRegister),
  takeLatest(types.ORDER_GET, orderGet),
]);
