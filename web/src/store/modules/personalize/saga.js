import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { alertShow } from "../alert/actions";
import { PersonalizeRequest} from "./actions";

import api from "../../../services/api";

function* personalizeRegister({ data }) {
  console.log(data)
  try {
    const response = yield call(api.post, `persons/${data.id}`, data);

    yield put(
      alertShow({
        type: "success",
        title: "Personalização cadastrado com sucesso!",
        message: response.data.name,
      })
    );
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
