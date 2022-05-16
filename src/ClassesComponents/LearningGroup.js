import { Lesson } from "./Lesson"

export class LearningGroup {
    constructor(courseName, teacherName, numberStudentsInGroup) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.numberStudentsInGroup = numberStudentsInGroup;
        this.passedLessons = [];
    };

    doneLesson(title, topics) {
        this.passedLessons.length > 0 ?
            this.lessonOverCheck(title, topics) :
            this.passedLessons.push(new Lesson(title, topics));
    };

    lessonOverCheck(title, topics) {
        this.passedLessons.forEach(lesson => {
            if(lesson.title !== title) {
                this.passedLessons.push(new Lesson(title, topics))
            }else {alert('Lesson is over!')};
        });
    };
};