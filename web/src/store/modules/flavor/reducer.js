import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  flavors: [],
  getFlavor: [],
  updateFlavor: [],
  deleteFlavor: [],
};

function flavor(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.FLAVOR_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.flavors = action.data;
      });
    }
    case types.FLAVOR_REQUEST: {
      return produce(state, (draft) => {
        draft.getFlavor = action.data;
      });
    }
    case types.FLAVOR_UPDATE: {
      return produce(state, (draft) => {
        draft.updateFlavor = action.data;
      });
    }
    case types.FLAVOR_DELETE_SUCCESS: {
      return produce(state, (draft) => {
        draft.deleteFlavor = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default flavor;
