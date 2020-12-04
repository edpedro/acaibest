import types from "./types";

export function alertShow(data) {
  return { type: types.ALERT_SHOW, data };
}
export function alertShowFalse() {
  return { type: types.ALERT_SHOW_FALSE};
}
