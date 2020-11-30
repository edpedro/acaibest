import { takeLatest, all, call, put } from "redux-saga/effects";
import types from "./types";
import { Requestbucket} from "./actions";

import api from "../../../services/api";

export function* getBucket() {
  const response = yield call(api.get, "/buckets");
  const res = response.data;
  yield put(Requestbucket(res));
}


export default all([
  takeLatest(types.GET_BUCKET, getBucket),
]);
