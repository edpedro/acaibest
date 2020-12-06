import types from "./types";

export function PersonalizeRegister(data) {  
  return { type: types.PERSONALIZE_REGISTER, data };
}
export function PersonalizeRegisterSuccess(data) {
  return { type: types.PERSONALIZE_REGISTER_SUCCESS, data };
}
export function PersonalizeGet(data) {  
  return { type: types.PERSONALIZE_GET, data };
}
export function PersonalizeRequest(data) {
  return { type: types.PERSONALIZE_REQUEST, data };
}