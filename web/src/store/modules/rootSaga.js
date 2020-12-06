import { all } from "redux-saga/effects";

import bucket from "./bucket/saga";
import order from "./order/saga";
import flavor from './flavor/saga'
import sizeBucket from './sizeBucket/saga'
import personalize from './personalize/saga'

export default function* rootSata() {
  return yield all([bucket, order, flavor, sizeBucket, personalize]);
}
