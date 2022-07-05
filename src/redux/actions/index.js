import * as types from "./types.js"

export const addNewSchool = (newSchool) => {
    return { type: types.ADD_NEW_SCHOOL, payload: newSchool};
};

export const removeAvailableSchool = (index) => {
    return { type: types.REMOVE_SCHOOL, payload: index};
};

export const registerAndCheckCourse = (payload) => {
    return { type: types.REGISTER_COURSE, payload: payload }
}