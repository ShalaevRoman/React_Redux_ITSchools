const defaultState = {
    availableCourses: [],
    description: "",
    maxGroup: 0,
    maxStudentsInGroup: 0,
    name: "",
    startedGroups: [],
};

const ADD_ITSCHOOL = "ADD_ITSCHOOL";
const REGISTER_COURSE = "REGISTER_COURSE";
const START_LEARNING_GROUP = "START_LEARNING_GROUP";
const END_LEARNING_GROUP = "END_LEARNING_GROUP";
const GET_LEARNING_GROUP_BY_COURSE_NAME = "GET_LEARNING_GROUP_BY_COURSE_NAME";
const DONE_LESSON = "DONE_LESSON";

export const createSchoolReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITSCHOOL:
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                maxGroup: action.payload.maxGroup,
                maxStudentsInGroup: action.payload.maxStudentsInGroup,
            }
            break;

        case REGISTER_COURSE: {
            if(state.maxGroup > 0) {
                if(!state.availableCourses.length) {
                    return {
                        ...state,
                        availableCourses: [...state.availableCourses, action.payload]
                    };
                };
            };

            const isUsed = state.availableCourses.some(course => course.courseName === action.payload.courseName);

            if(!isUsed) {
                return {
                    ...state,
                    availableCourses: [...state.availableCourses, action.payload]
                };
            };
        };
        break;

        case START_LEARNING_GROUP: {
            if(state.maxGroup > 0 && state.maxStudentsInGroup >= action.payload.numberStudentsInGroup) {
                const isUsed = state.availableCourses.some(course => (
                    course.courseName === action.payload.courseName && course.availableTeachersAmount !== 0
                ))

                const findIndex = state.availableCourses.findIndex(
                    course => (course.courseName === action.payload.courseName && course.availableTeachersAmount !== 0
                    ));

                if(isUsed) {
                    return {
                        ...state,
                        maxGroup: state.maxGroup - 1,
                        startedGroups: [...state.startedGroups, action.payload],
                        availableCourses: state.availableCourses.map((course, index) => {
                            if(index === findIndex) {
                                return {
                                    ...course,
                                    availableTeachersAmount: --course.availableTeachersAmount
                                };
                            } else {
                                return course;
                            }
                        })
                    };
                };
            };
        };
        break;

        case END_LEARNING_GROUP: {
            const newAvailableCourses = [...state.availableCourses];
            newAvailableCourses.forEach(course => {
                if(course.courseName === action.payload.courseName) {
                    ++course.availableTeachersAmount
                }
            });

            return {
                ...state,
                startedGroups: state.startedGroups.filter(group => (
                    group.courseName !== action.payload.courseName && group.teacherName !== action.payload.teacherName
                )),
                maxGroup: state.maxGroup + 1,
                availableCourses: [...newAvailableCourses]
            };
        };
        break;

        case GET_LEARNING_GROUP_BY_COURSE_NAME: {
            const startedGroups = state.startedGroups.filter(group => group.courseName === action.payload.courseName);
            return startedGroups;
        }

        case DONE_LESSON: {
            const findIndex = state.startedGroups.findIndex(
                group => (group.courseName === action.payload.courseName && group.teacherName === action.payload.teacherName
                ));

            const isUsed = state.startedGroups.some(
                group => (group.courseName === action.payload.courseName && group.teacherName === action.payload.teacherName
                ));

            if(isUsed) {
                return {
                    ...state,
                    startedGroups: state.startedGroups.map((group, index) => {
                        if(index === findIndex && !group.passedLessons.length) {
                            group.passedLessons.push({
                                title: action.payload.title,
                                topics: action.payload.topics,
                            })
                            return group;
                        } else if(index === findIndex && group.passedLessons.length) {
                            const newPassedLessons = [...group.passedLessons]
                            newPassedLessons.forEach(lesson => {
                               (lesson.title !== action.payload.title) && group.passedLessons.push({title: action.payload.title, topics: action.payload.topics})
                            })
                            return {
                                ...group,
                                passedLessons: [...newPassedLessons]
                            }
                        }
                    })
                }
            } else {
                return state;
            }
        };

        default:
            return state;
    }
}

export const addItSchool = (payload) => ({type: ADD_ITSCHOOL, payload});
export const registerCourse = (payload) => ({type: REGISTER_COURSE, payload});
export const startLearningGroup = (payload) => ({type: START_LEARNING_GROUP, payload});
export const endLearningGroup = (payload) => ({type: END_LEARNING_GROUP, payload});
export const getLearningGroupByCourseName = (payload) => ({type: GET_LEARNING_GROUP_BY_COURSE_NAME, payload});
export const doneLesson =(payload) => ({type: DONE_LESSON, payload});