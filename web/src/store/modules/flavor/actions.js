import types from "./types";

export function FlavorRegister(data) {  
  return { type: types.FLAVOR_REGISTER, data };
}
export function FlavorRegisterSuccess(data) {
  return { type: types.FLAVOR_REGISTER_SUCCESS, data };
}
export function FlavorGet(data) {  
  return { type: types.FLAVOR_GET, data };
}
export function FlavorRequest(data) {
  return { type: types.FLAVOR_REQUEST, data };
}