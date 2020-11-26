import { all } from "redux-saga/effects";

import bucket from "./bucket/saga";

export default function* rootSata() {
  return yield all([bucket]);
}
