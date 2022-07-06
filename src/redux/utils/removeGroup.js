export const removeGroup = (array, obj) => {
    array[obj.index].startedGroups = array[obj.index].startedGroups.filter(group  => (
        group.courseName !== obj.courseName && group.teacherName !== obj.teacherName
    ));
    array[obj.index].maxGroup++
    array[obj.index].availableCourses.forEach(course => {
        (course.courseName === obj.courseName) && course.availableTeachersAmount++
    })
    return array;
};