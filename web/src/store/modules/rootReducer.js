import { combineReducers } from "redux";

import bucket from './bucket/reducer'
import order from './order/reducer'
import alert from './alert/reducer'

export default combineReducers({
    bucket,
    order,
    alert
})
