import { combineReducers } from "redux";
import { getUser } from "./getUser";

const rootReducer = combineReducers({
    getUser,
});

export default rootReducer;