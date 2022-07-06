export const doneLesson = (array, obj) => {
    const passedLessons = array[obj.index].startedGroups[obj.indexGroup].passedLessons;

    (!passedLessons.length) && passedLessons.push(obj.lesson);

    passedLessons.forEach(lesson => {
        (lesson.title !== obj.lesson.title) && passedLessons.push(obj.lesson);
    })

    array[obj.index].startedGroups[obj.indexGroup].passedLessons = passedLessons;

    return array;
};