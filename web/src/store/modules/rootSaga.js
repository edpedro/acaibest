import { all } from "redux-saga/effects";

import bucket from "./bucket/saga";
import order from "./order/saga";
import flavor from './flavor/saga'

export default function* rootSata() {
  return yield all([bucket, order, flavor]);
}
