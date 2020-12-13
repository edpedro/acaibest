import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  sizeBuckets: [],
  getSizeBuckets: [],
  updateSizeBucket: [],
};

function sizeBucket(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.SIZEBUCKET_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.sizeBuckets = action.data;
      });
    }
    case types.SIZEBUCKET_REQUEST: {
      return produce(state, (draft) => {
        draft.getSizeBuckets = action.data;
      });
    }
    case types.SIZEBUCKET_UPDATE: {
      return produce(state, (draft) => {
        draft.updateSizeBucket = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default sizeBucket;
