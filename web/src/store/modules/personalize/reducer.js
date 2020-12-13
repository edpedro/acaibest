import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  personalizes: [],
  getPersonalizes: [],
  updatePesonalizes: [],
};

function personalize(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.PERSONALIZE_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.personalizes = action.data;
      });
    }
    case types.PERSONALIZE_REQUEST: {
      return produce(state, (draft) => {
        draft.getPersonalizes = action.data;
      });
    }
    case types.PERSONALIZE_UPDATE: {
      return produce(state, (draft) => {
        draft.updatePesonalizes = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default personalize;
