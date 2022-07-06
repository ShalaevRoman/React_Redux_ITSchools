import * as React from 'react';
import { connect } from 'react-redux';
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
                  doneLesson
}) => {

    React.useEffect(() => {

        addSchool({
            name: 'Hillel',
            description: 'first school',
            maxGroup: 3,
            maxStudentsInGroup: 10,
            availableCourses: [],
            startedGroups: [],
            history: `Created ${new Date().toDateString()}`,
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
                passedLessons: [],
            }
        });

        registerGroup({
            index: 0,
            group: {
                courseName: 'React',
                teacherName: 'Petya',
                numberStudentsInGroup: 8,
                passedLessons: [],
            }
        });

        removeGroup({
            index: 0,
            courseName: 'React',
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


    }, [])

    return (
        <section>
            <h1></h1>
        </section>
    )
};

const mapStateToProps = (state) => ({
    schools: state.availableSchool,
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



