import types from "./types";

export function alertShow(data) {
  return { type: types.ALERT_SHOW, data };
}
