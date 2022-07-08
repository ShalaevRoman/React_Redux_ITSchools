export const removeGroup = (array, obj) => {
    array[obj.index].startedGroups = array[obj.index].startedGroups.filter(group  => (
        group.teacherName !== obj.teacherName
    ));
    array[obj.index].maxGroup++
    array[obj.index].availableCourses.forEach(course => {
        (course.courseName === obj.courseName) && course.availableTeachersAmount++
    })
    return array;
};