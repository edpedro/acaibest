import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  flavors: [],
  getFlavor: [],
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
    default: {
      return state;
    }
  }
}

export default flavor;
