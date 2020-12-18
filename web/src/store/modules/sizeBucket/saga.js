import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { SizeBcuketRequest, SizeBcuketDeleteSuccess } from "./actions";

import api from "../../../services/api";
import history from "../../../services/history";

function* sizeBcuketRegister({ data, id }) {
  try {
    const newId = id ? id : data.id;
    const method = id ? api.put : api.post;

    const response = yield call(method, `sizebucket/${newId}`, data);

    const msg = id ? "atualizado" : "cadastrado";
    yield put(
      alertShow({
        type: "success",
        title: `Tamanho ${msg} com sucesso!`,
        message: id ? msg : response.data.name,
      })
    );
    history.push("/listar");
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

function* deleteSizeBcuket({ data, id }) {
  try {
    yield call(api.delete, `sizebucket/${id}`, { data });

    yield put(
      alertShow({
        type: "success",
        title: `Deletado com sucesso!`,
        message: data.name,
      })
    );
    yield put(SizeBcuketDeleteSuccess(data.name));
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao deleta a tamanho",
        message: "Tente novamente",
      })
    );
  }
}

export default all([
  takeLatest(types.SIZEBUCKET_REGISTER, sizeBcuketRegister),
  takeLatest(types.SIZEBUCKET_GET, getSizeBcuket),
  takeLatest(types.SIZEBUCKET_DELETE, deleteSizeBcuket),
]);
