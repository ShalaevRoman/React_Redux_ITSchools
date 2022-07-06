import * as types from "./types.js"

export const addNewSchool = (newSchool) => {
    return { type: types.ADD_NEW_SCHOOL, payload: newSchool};
};

export const removeAvailableSchool = (index) => {
    return { type: types.REMOVE_SCHOOL, payload: index};
};

export const registerCourse = (dataCourse) => {
    return { type: types.REGISTER_COURSE, payload: dataCourse };
};

export const startLearningGroup = (dataGroup) => {
    return { type: types.START_LEARNING_GROUP, payload: dataGroup };
};

export const removeLearningGroup = (dataGroup) => {
    return { type: types.REMOVE_LEARNING_GROUP, payload: dataGroup };
};

export const doneLessonInGroup = (lessonInfo) => {
    return { type: types.DONE_LESSON, payload: lessonInfo };
};

