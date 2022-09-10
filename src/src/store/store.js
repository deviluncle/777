import { createStore } from "redux";
import {state} from "./state";
import reducer  from "./reducer";

const store = createStore(reducer, state);
export default store;