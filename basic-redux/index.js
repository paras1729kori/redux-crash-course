/* 
  Steps involved in redux:
    actions
    action creator
    initial state
    reducer
    (prevState, action) => newState
    store
    subscribe
    dispatch
    unsubscribe
*/

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const { orderCake, restockCake, cakeReducer } = require("./states/cake");
const {
  orderIceCream,
  restockIceCream,
  iceCreanReducer,
} = require("./states/icrecream");

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreanReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(actionCreator)
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream(5);
actions.restockIceCream(10);

// unsubscribe
unsubscribe();
