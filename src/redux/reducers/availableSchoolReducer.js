import * as types from '../actions/types.js'
import {removeElementFromArray} from '../utils/removeElementFromArray.js'
import {registerAndCheckElement} from '../utils/registerAndCheckElement.js'

const initialState = [];

export const availableSchoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_SCHOOL:
            return [...state, action.payload];

        case types.REMOVE_SCHOOL:
            return [...removeElementFromArray(state, action.payload)];

        case types.REGISTER_COURSE:
            return [...registerAndCheckElement(state, action.payload)];

        default:
            return state;
    }
}