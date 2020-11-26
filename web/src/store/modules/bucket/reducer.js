import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  buckets: [],
};

function bucket(state = INITTIAL_STATE, action) { 
  switch (action.type) {
    case types.REQUEST_BUCKET: {
      return produce(state, (draft) => {
        draft.buckets = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default bucket;
