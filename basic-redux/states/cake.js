const produce = require("immer").produce;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      // return {
      //   ...state,
      //   numOfCakes: state.numOfCakes + action.payload,
      // };
      return produce(state, (draft) => {
        draft.numOfCakes += action.payload;
      });
    default:
      return state;
  }
};

module.exports = {
  orderCake,
  restockCake,
  cakeReducer,
};
