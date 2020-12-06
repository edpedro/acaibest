import types from "./types";

export function SizeBcuketRegister(data) {  
  return { type: types.SIZEBUCKET_REGISTER, data };
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