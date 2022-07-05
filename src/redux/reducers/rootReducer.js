import { combineReducers } from "redux";
import { availableSchoolReducer } from "./availableSchoolReducer.js"

export const rootReducer = combineReducers({
    availableSchool: availableSchoolReducer,
});