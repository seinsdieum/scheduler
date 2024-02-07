import {combineReducers, createStore} from "redux";
import {optionsReducer} from "./options.js";

const rootReducer = combineReducers({
    options: optionsReducer
})

export const store = createStore(rootReducer)