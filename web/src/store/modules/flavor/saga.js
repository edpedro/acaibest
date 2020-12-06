import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { FlavorRequest } from "./actions";

import api from "../../../services/api";

function* flavorRegister({ data }) {
  try {
    const response = yield call(api.post, "flavors", data);

    yield put(
      alertShow({
        type: "success",
        title: "Sabor cadastrado com sucesso!",
        message: response.data.name,
      })
    );
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

export default all([
  takeLatest(types.FLAVOR_REGISTER, flavorRegister),
  takeLatest(types.FLAVOR_GET, getFlavors),
]);
