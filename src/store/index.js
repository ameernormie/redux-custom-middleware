import { createStore, applyMiddleware } from "redux";
import reducer, { INITIAL_STATE } from "../reducers";
import { fetchMiddleware } from "../middleware/fetchMiddleware";

export const store = createStore(
  reducer,
  INITIAL_STATE,
  // Custom middleware to intercept http call
  applyMiddleware(fetchMiddleware)
);
