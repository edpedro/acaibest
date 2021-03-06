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
    case types.ALERT_SHOW_FALSE: {
      return produce(state, (draft) => {        
        draft.showMessage = false;
      });
    }
    default: {
      return state;
    }
  }
}

export default alert;
