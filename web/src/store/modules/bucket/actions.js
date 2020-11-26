import types from "./types";

export function Getbucket(data) {
  return { type: types.GET_BUCKET, data};
}
export function Requestbucket(data) {
  return { type: types.REQUEST_BUCKET, data };
}
