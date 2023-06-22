import { combineReducers } from "redux";
import { getUserReducer } from "./getUser";

const rootReducer = combineReducers({
    getUserReducer,
});

export default rootReducer;