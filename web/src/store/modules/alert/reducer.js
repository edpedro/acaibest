import produce from "immer";
import types from "./types";

const INITTIAL_STATE = {
  showMessage: false,
  data: [],
};

function alert(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.ALERT_SHOW: {
      return produce(state, (draft) => {
        draft.data = action.data;
        draft.showMessage = true;
      });
    }
    default: {
      return state;
    }
  }
}

export default alert;
