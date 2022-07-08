import * as React from 'react';
import '../styles/corse.scss'


const CourseList = ({
                        availableCourses,
                        setName
}) => {
    const [activeIndex, setActiveIndex] = React.useState()

    return (
        <section className={'course_wrapper'}>
            <h1>Courses</h1>
            <ul className={'course_list'}>
                {availableCourses.map((course, index) => (
                    <li
                        className={`course_item ${activeIndex === index && 'active'}`}
                        key={`${course.courseName}${index}`}
                        onClick={() => {
                            if(activeIndex === index) {
                                setName(null)
                                setActiveIndex(null)
                                return;
                            }
                            setActiveIndex(index)
                            setName(course.courseName)
                        }}
                    >
                        {course.courseName}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CourseList;