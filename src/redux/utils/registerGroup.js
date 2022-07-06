export const registerGroup = (array, obj) => {

    if(array[obj.index].maxGroup > 0 && array[obj.index].maxStudentsInGroup >= obj.group.numberStudentsInGroup) {
        array[obj.index].availableCourses.forEach(course => {
            if(course.courseName === obj.group.courseName && course.availableTeachersAmount !== 0) {
                array[obj.index].startedGroups.push(obj.group);
                array[obj.index].maxGroup--;
                course.availableTeachersAmount--;
            };
        });
    };

    return array
};

