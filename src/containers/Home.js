import * as React from 'react';
import { connect } from 'react-redux';
import { addNewSchool, removeAvailableSchool, registerAndCheckCourse } from '../redux/actions/index.js';



const Home = ({addSchool, schools, removeSchool, registerCourse}) => {

    React.useEffect(() => {

        addSchool({
            name: 'Hillel',
            description: 'first school',
            maxGroup: 3,
            maxStudentsInGroup: 10,
            availableCourses: [],
            startedGroups: [],
        });

        registerCourse({
            index: 0,
            course: {
                courseName: 'React',
                totalLessons: 10,
                availableTeachersAmount: 3,
            }
        });

        registerCourse({
            index: 0,
            course: {
                courseName: 'Noda',
                totalLessons: 9,
                availableTeachersAmount: 2,
            }
        })

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
    registerCourse: (payload) => dispatch(registerAndCheckCourse(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



