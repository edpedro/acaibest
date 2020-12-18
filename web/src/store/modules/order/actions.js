import types from "./types";

export function OrderRegister(data) {  
  return { type: types.ORDER_REGISTER, data };
}
export function OrderRegisterSuccess(data) {
  return { type: types.ORDER_REGISTER_SUCCESS, data };
}
export function OrderGet(data) {  
  return { type: types.ORDER_GET, data };
}
export function OrderRequest(data) {
  return { type: types.ORDER_REQUEST, data };
}
