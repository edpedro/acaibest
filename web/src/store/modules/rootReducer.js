import { combineReducers } from "redux";

import bucket from './bucket/reducer'
import order from './order/reducer'
import alert from './alert/reducer'
import flavor from './flavor/reducer'
import sizeBucket from './sizeBucket/reducer'
import personalize from './personalize/reducer'

export default combineReducers({
    bucket,
    order,
    alert,
    flavor,
    sizeBucket,
    personalize
})
