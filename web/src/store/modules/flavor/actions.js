import types from "./types";

export function FlavorRegister(data, id) {  
  return { type: types.FLAVOR_REGISTER, data, id };
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
export function FlavorUpdate(data) {
  return { type: types.FLAVOR_UPDATE, data };
}
export function FlavorDelete(data, id) {
  return { type: types.FLAVOR_DELETE, data, id };
}
export function FlavorDeleteSuccess(data) {
  return { type: types.FLAVOR_DELETE_SUCCESS, data};
}