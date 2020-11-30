import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  orders: [],
};

function order(state = INITTIAL_STATE, action) { 
  switch (action.type) {
    case types.ORDER_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.orders = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default order;
