import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { FlavorRequest, FlavorDeleteSuccess } from "./actions";

import api from "../../../services/api";
import history from "../../../services/history";

function* flavorRegister({ data, id }) {
  try {    
    const method = id ? api.put : api.post;
    const url = id ? `flavors/${id}`: "flavors"
    const response = yield call(method, url, data);

    const msg = id ? "atualizado" : "cadastrado";

    yield put(
      alertShow({
        type: "success",
        title: `Sabor ${msg} com sucesso!`,
        message: id ? data.name : response.data.name,       
      })
    );
    history.push("/listar");
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao cadastrar sabor",
        message: "Tente novamente",
      })
    );
  }
}

export function* getFlavors() {
  const response = yield call(api.get, "/flavors");
  const res = response.data;
  yield put(FlavorRequest(res));
}

function* deleteFlavor({ data, id }) {
  console.log( data, id)
  try {
    yield call(api.delete, `flavors/${id}`);

    yield put(
      alertShow({
        type: "success",
        title: `Deletado com sucesso!`,
        message: data.name,
      })
    );
    yield put(FlavorDeleteSuccess(data.name));
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao deleta a sabor",
        message: "Tente novamente",
      })
    );
  }
}
export default all([
  takeLatest(types.FLAVOR_REGISTER, flavorRegister),
  takeLatest(types.FLAVOR_GET, getFlavors),
  takeLatest(types.FLAVOR_DELETE, deleteFlavor),
]);
