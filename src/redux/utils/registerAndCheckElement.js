export const registerAndCheckElement = (array, obj) => {
    const newCourse = {
        courseName: obj.course.courseName,
        totalLessons: obj.course.totalLessons,
        availableTeachersAmount: obj.course.availableTeachersAmount,
    }

    if(array[obj.index].maxGroup > 0 && !array[obj.index].availableCourses.length) {
        array[obj.index].availableCourses.push(newCourse)
    }

    const isUsed = array[obj.index].availableCourses.some(course => course.courseName === obj.course.courseName);

    if(!isUsed) {
        array[obj.index].availableCourses.push(newCourse);
    };

    return array;
}