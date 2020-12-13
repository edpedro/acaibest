import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { PersonalizeRequest } from "./actions";

import api from "../../../services/api";
import history from '../../../services/history'

function* personalizeRegister({ data, id }) {
  try {
    const newId = id ? id : data.id;
    const method = id ? api.put : api.post;
    const response = yield call(method, `persons/${newId}`, data);

    const msg = id ? "atualizado" : "cadastrado";

    yield put(
      alertShow({
        type: "success",
        title: `Personalização ${msg} com sucesso!`,
        message: id ? msg : response.data.name,
      })
    );
    history.push("/listar")
  } catch (error) {
    yield put(
      alertShow({
        type: "danger",
        title: "Erro ao cadastrar a personalização",
        message: "Tente novamente",
      })
    );
  }
}

export function* getPersonalize() {
  const response = yield call(api.get, "/persons");
  const res = response.data;
  yield put(PersonalizeRequest(res));
}

export default all([
  takeLatest(types.PERSONALIZE_REGISTER, personalizeRegister),
  takeLatest(types.PERSONALIZE_GET, getPersonalize),
]);
