import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { SizeBcuketRequest } from "./actions";

import api from "../../../services/api";

function* sizeBcuketRegister({ data }) {
  console.log(data)
  try {
    const response = yield call(api.post, `sizebucket/${data.id}`, data);

    yield put(
      alertShow({
        type: "success",
        title: "Tamanho cadastrado com sucesso!",
        message: response.data.name,
      })
    );
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao cadastrar tamanho",
        message: "Tente novamente",
      })
    );
  }
}

export function* getSizeBcuket() {
  const response = yield call(api.get, "/sizebucket");
  const res = response.data;
  yield put(SizeBcuketRequest(res));
}

export default all([
  takeLatest(types.SIZEBUCKET_REGISTER, sizeBcuketRegister),
  takeLatest(types.SIZEBUCKET_GET, getSizeBcuket),
]);
