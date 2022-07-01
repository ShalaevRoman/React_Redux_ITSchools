import {createStore} from 'redux';
import {
    createSchoolReduser,
    addItSchool,
    registerCourse,
    startLearningGroup,
    endLearningGroup,
    getLearningGroupByCourseName,
    doneLesson,
} from './createScoolReduser.js'


const store = createStore(createSchoolReduser);

store.dispatch(addItSchool({
    name: 'Hillel',
    description: 'new course on react',
    maxGroup: 5,
    maxStudentsInGroup: 15,
}));

store.dispatch(registerCourse({
    courseName: "Node",
    totalLessons: 8,
    availableTeachersAmount: 5,
}));

store.dispatch(registerCourse({
    courseName: "Pro",
    totalLessons: 25,
    availableTeachersAmount: 5,
}));

store.dispatch(registerCourse({
    courseName: "React",
    totalLessons: 15,
    availableTeachersAmount: 5,
}));

store.dispatch(startLearningGroup({
    courseName: "Pro",
    teacherName: "Viktor",
    numberStudentsInGroup: 14,
    passedLessons: [],
}));

store.dispatch(startLearningGroup({
    courseName: "Pro",
    teacherName: "Vlad",
    numberStudentsInGroup: 11,
    passedLessons: [],
}));

store.dispatch(startLearningGroup({
    courseName: "Node",
    teacherName: "Vika",
    numberStudentsInGroup: 12,
    passedLessons: [],
}));

store.dispatch(startLearningGroup({
    courseName: "React",
    teacherName: "Petro",
    numberStudentsInGroup: 10,
    passedLessons: [],
}));

store.dispatch(endLearningGroup({
    courseName: "React",
    teacherName: "Petro",
}));

store.dispatch(doneLesson({
    courseName: "Pro",
    teacherName: "Vlad",
    title: "Redux",
    topics:
        "Redux — библиотека для JavaScript с открытым исходным кодом," +
        " предназначенная для управления состоянием приложения." +
        " Чаще всего используется в связке с React или Angular для разработки клиентской части." +
        " Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст."
}));

store.dispatch(doneLesson({
    courseName: "Node",
    teacherName: "Vika",
    title: "Redux",
    topics:
        "Redux — библиотека для JavaScript с открытым исходным кодом," +
        " предназначенная для управления состоянием приложения." +
        " Чаще всего используется в связке с React или Angular для разработки клиентской части." +
        " Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст."
}));
//
// store.dispatch(doneLesson({
//     courseName: "Node",
//     teacherName: "Vika",
//     title: "Redux",
//     topics:
//         "Redux — библиотека для JavaScript с открытым исходным кодом," +
//         " предназначенная для управления состоянием приложения." +
//         " Чаще всего используется в связке с React или Angular для разработки клиентской части." +
//         " Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст."
// }));

// store.dispatch(getLearningGroupByCourseName({courseName: "Pro"}));


console.log(store.getState());

