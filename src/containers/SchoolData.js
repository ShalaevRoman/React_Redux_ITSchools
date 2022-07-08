import * as React from 'react';
import HeaderInfo from '../components/HeaderInfo.js';
import CourseList from '../components/CourseList.js';
import StartedGroups from '../components/StartedGroups.js';
import filterByName from '../redux/utils/filterByName.js';
import totalAmount from '../redux/utils/totalAmount.js';

const SchoolData = ({dataSchool}) => {
    const [name, setName] = React.useState(null)

    return (
        <section className={'schoolData_wrapper'}>
            <HeaderInfo
                schoolName={dataSchool.name}
                schoolDescription={dataSchool.description}
                goupsCount={dataSchool.maxGroup}
                totalStudents={totalAmount(dataSchool.startedGroups)}
            />
            <section className={'schoolData_main'}>
                <CourseList
                    availableCourses={dataSchool.availableCourses}
                    setName={setName}
                />
                <StartedGroups
                    startedGroups={!name ? dataSchool.startedGroups : filterByName(dataSchool.startedGroups, name)}
                    maxStudents={dataSchool.maxStudentsInGroup}
                    history={dataSchool.history}
                    name={name}
                />
            </section>
        </section>
    );
};

export default SchoolData;