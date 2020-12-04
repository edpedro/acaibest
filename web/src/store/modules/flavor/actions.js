import types from "./types";

export function FlavorRegister(data) {  
  return { type: types.FLAVOR_REGISTER, data };
}
export function FlavorRegisterSuccess(data) {
  return { type: types.FLAVOR_REGISTER_SUCCESS, data };
}