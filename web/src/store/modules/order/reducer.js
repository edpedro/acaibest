import produce from "immer";
import types from "./types";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

const INITTIAL_STATE = {
  orders: [],
  ordersData: [],
  orderReport: {},
};

function order(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.ORDER_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.orders = action.data;
      });
    }
    case types.ORDER_REQUEST: {
      return produce(state, (draft) => {
        draft.ordersData = action.data;

        action.data.forEach((item) => {
          const firstDate = parseISO(item.createdAt);
          const formattedDate = format(firstDate, "dd/MM", { locale: pt });
          item.createdAt = formattedDate;
        });

        draft.orderReport = action.data;
      });
    }
    default: {
      return state;
    }
  }
}

export default order;
