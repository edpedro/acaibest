import types from "./types";

export function SizeBcuketRegister(data, id) {  
  return { type: types.SIZEBUCKET_REGISTER, data, id };
}
export function SizeBcuketRegisterSuccess(data) {
  return { type: types.SIZEBUCKET_REGISTER_SUCCESS, data };
}
export function SizeBcuketGet(data) {  
  return { type: types.SIZEBUCKET_GET, data };
}
export function SizeBcuketRequest(data) {
  return { type: types.SIZEBUCKET_REQUEST, data };
}
export function SizeBcuketUpdate(data) {
  return { type: types.SIZEBUCKET_UPDATE, data };
}
export function SizeBcuketDelete(data, id) {
  return { type: types.SIZEBUCKET_DELETE, data, id };
}
export function SizeBcuketDeleteSuccess(data) {
  return { type: types.SIZEBUCKET_DELETE_SUCCESS, data};
}