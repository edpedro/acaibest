import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  flavors: [],
};

function flavor(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.FLAVOR_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.flavors = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default flavor;
