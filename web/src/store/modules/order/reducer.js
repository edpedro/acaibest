import produce from "immer";
import types from "./types";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

const INITTIAL_STATE = {
  orders: [],
  ordersData: [],
  orderReport: {},
  orderStatus: [],
};

function order(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.ORDER_REGISTER_SUCCESS: {
      return produce(state, (draft) => {
        draft.orders = action.data;
      });
    }
    case types.ORDER_STATUS_SUCCESS: {
      return produce(state, (draft) => {
        draft.orderStatus = action.data;
      });
    }
    case types.ORDER_REQUEST: {
      return produce(state, (draft) => {
        draft.ordersData = action.data;

        //Alterar data
        action.data.forEach((item) => {
          const firstDate = parseISO(item.createdAt);
          const formattedDate = format(firstDate, "dd/MM", { locale: pt });
          item.createdAt = formattedDate;
        });
        //Verificar quantidade de pedidos por data
        const report = action.data.reduce((acc, curr) => {
          if (!acc.some(({ date }) => date === curr.createdAt)) {
            acc.push({ date: curr.createdAt, pedido: 1 });
          } else {
            acc.find(({ date }) => date === curr.createdAt).pedido++;
          }

          return acc;
        }, []);
        draft.orderReport = report;
      });
    }
    default: {
      return state;
    }
  }
}

export default order;
