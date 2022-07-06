import * as types from '../actions/types.js';
import { removeElementFromArray } from '../utils/removeElementFromArray.js';
import { registerCourse } from '../utils/registerCourse.js';
import { registerGroup } from '../utils/registerGroup.js';
import { removeGroup } from '../utils/removeGroup.js';
import { doneLesson } from '../utils/doneLesson.js';

const initialState = [];

export const availableSchoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_SCHOOL:
            return [...state, action.payload];

        case types.REMOVE_SCHOOL:
            return [...removeElementFromArray(state, action.payload)];

        case types.REGISTER_COURSE:
            return [...registerCourse(state, action.payload)];

        case types.START_LEARNING_GROUP:
            return [...registerGroup(state, action.payload)];

        case types.REMOVE_LEARNING_GROUP:
            return [...removeGroup(state, action.payload)];

        case types.DONE_LESSON:
            return [...doneLesson(state, action.payload)]

        default:
            return state;
    }
}