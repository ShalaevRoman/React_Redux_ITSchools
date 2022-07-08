import * as React from 'react';
import { connect } from 'react-redux';
import SchoolData from './SchoolData.js';
import SidebarSchool from './SidebarSchool.js';

import '../styles/home.scss';
import {
    addNewSchool,
    removeAvailableSchool,
    registerCourse,
    startLearningGroup,
    removeLearningGroup,
    doneLessonInGroup
} from '../redux/actions/index.js';
const Home = ({
                  addSchool,
                  schools,
                  removeSchool,
                  registerGroup,
                  startCourse,
                  removeGroup,
                  doneLesson,
                  state
}) => {
    const [dataSchool, setDataSchool] = React.useState(null)

    React.useEffect(() => {
        addSchool({
            name: 'Hillel',
            description: 'first school',
            maxGroup: 3,
            maxStudentsInGroup: 10,
            availableCourses: [],
            startedGroups: [],
            history: new Date().toISOString().split('T')[0],
        });
        addSchool({
            name: 'ITDestroyer',
            description: 'second school',
            maxGroup: 5,
            maxStudentsInGroup: 15,
            availableCourses: [],
            startedGroups: [],
            history: new Date().toDateString(),
        });
        startCourse({
            index: 0,
            course: {
                courseName: 'React',
                totalLessons: 10,
                availableTeachersAmount: 3,
            }
        });
        startCourse({
            index: 0,
            course: {
                courseName: 'Node',
                totalLessons: 9,
                availableTeachersAmount: 5,
            }
        });
        registerGroup({
            index: 0,
            group: {
                courseName: 'Node',
                teacherName: 'Roman',
                numberStudentsInGroup: 9,
                totalLessons: 25,
                passedLessons: [],
            }
        });
        registerGroup({
            index: 0,
            group: {
                courseName: 'React',
                teacherName: 'Masha',
                numberStudentsInGroup: 5,
                totalLessons: 24,
                passedLessons: [],
            }
        });
        registerGroup({
            index: 0,
            group: {
                courseName: 'Node',
                teacherName: 'Marina',
                numberStudentsInGroup: 7,
                totalLessons: 23,
                passedLessons: [],
            }
        });
        registerGroup({
            index: 0,
            group: {
                courseName: 'React',
                teacherName: 'Petya',
                numberStudentsInGroup: 8,
                totalLessons: 20,
                passedLessons: [],
            }
        });
        removeGroup({
            index: 0,
            teacherName: 'Petya',
        });
        doneLesson({
            index: 0,
            indexGroup: 0,
            lesson: {
                title: 'Redux',
                topic: 'Reducer, action, connect'
            },
        });
        doneLesson({
            index: 0,
            indexGroup: 0,
            lesson: {
                title: 'React Hooks',
                topic: 'Context'
            },
        });
        doneLesson({
            index: 0,
            indexGroup: 1,
            lesson: {
                title: 'Token',
                topic: 'Access token Refresh token'
            },
        });

    }, [])

    return (
        <section className={'main_wrapper'}>
            <SidebarSchool setDataSchool={setDataSchool}/>
            {dataSchool !== null ?
                <SchoolData dataSchool={dataSchool}/> :
                <div className={'not_selected'}>
                    <h1 className={'not_selected_text'}>school not selected</h1>
                </div>}
        </section>
    )
};

const mapStateToProps = (state) => ({
    state: state,
});

const mapDispatchToProps = (dispatch) => ({
    addSchool: (newSchool) => dispatch(addNewSchool(newSchool)),
    removeSchool: (index) => dispatch(removeAvailableSchool(index)),
    startCourse: (payload) => dispatch(registerCourse(payload)),
    registerGroup: (payload) => dispatch(startLearningGroup(payload)),
    removeGroup: (payload) => dispatch(removeLearningGroup(payload)),
    doneLesson: (lessonInfo) => dispatch(doneLessonInGroup(lessonInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



