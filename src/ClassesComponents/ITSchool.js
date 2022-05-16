// Класс ITSchool должен содержать конструктор, который принимает имя, описание, максимальное количество групп и максимальное количество студентов в каждой группе. По мимо тех свойств, которые создаются в конструкторе, должны быть еще два свойства: availableCourses и startedGroups. Они нужны для работы методов нашего класса.
//     Также у этого класс должны быть методы:
//     registerCourse(courseName, totalLessons, availableTeachersAmount) -- метод должен создавать новый объект класса Course eсли такого курса еще нет среди доступных курсов в школе.
// startLearningGroup(courseName, teacherName, amountOfStudents) -- метод должен создавать новый объект класса LearningGroup если есть такой курс и количество преподавателей такого курса не равно нулю. Если все проверки удовлетворены, то в этом курсе нужно уменьшить количество преподавателей на 1.

// endLearningGroup(courseName, teacherName) -- метод для завершения учебной группы, работает также как и в прошлой реализации, только теперь еще и имя преподавателя принимает и удаляет именно ту учебную группу, которую ведет данный преподаватель.

// getLearningGroupByCourseName(courseName) -- метод который возвращает массив учебных групп которые обучаются по курсу courseName.
// ---------------------------
//     Класс Course должен содержать в себе только конструктор, который принимает имя курса, количество уроков на курсе (на нашем с вами курсе например 38 уроков) и доступное количество преподавателей на этом курсе. Это количество будет уменьшаться каждый раз когда в школе стартует новая группа по этому курсу.
// ---------------------------
//     Класс LearningGroup должен содержать конструктор, который принимает имя курса, имя преподавателя и количество студентов в группе. Кроме этого должен быть еще метод doneLesson(title, topics) -- метод должен проверять не было ли уже пройденного урока (урок -- это объект класса Lesson) и если такого урока прежде не было, то создаем новый объект урока (объект класса Lesson) и добавляем в поле passedLessons класса LearningGroup.
// ---------------------------
//     Класс Lesson -- самый простой класс, должен содержать конструктор, который принимает заголовок урока и темы, которые были рассмотрены на уроке.
//     Сделайте это домашнее задание внутри пустого CRA приложения. Из него мы потом будет делать непосредственно копию LMS, в которой вы сейчас находитесь)
import { Course } from "./Course"
import { LearningGroup } from "./LearningGroup"

class ITSchool {
    constructor(courseName, description, maxGroup, maxStudentsInGroup) {
        this.name = courseName;
        this.description = description;
        this.maxGroup = maxGroup;
        this.maxStudentsInGroup = maxStudentsInGroup;
        this.availableCourses = [];
        this.startedGroups = [];
    };

    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        if(this.maxGroup > 0) {
            if(!this.availableCourses.length) {
                this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
                return;
            };
        };

        const isUsed = this.availableCourses.some(course => course.courseName === courseName);

        if(!isUsed) {
            this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
        };
    };

    startLearningGroup(courseName, teacherName, numberStudentsInGroup) {
        if(this.maxGroup > 0 && this.maxStudentsInGroup >= numberStudentsInGroup) {
            this.availableCourses.forEach(course => {
                if(course.courseName === courseName && course.availableTeachersAmount !== 0) {
                    this.startedGroups.push(new LearningGroup(courseName, teacherName, numberStudentsInGroup));
                    this.maxGroup-- &&
                    course.availableTeachersAmount--
                }else {alert(`this course is not available! number of groups = ${this.maxGroup},
                 available teachers = ${course.availableTeachersAmount},
                  maximum number of students = ${ this.maxStudentsInGroup}`)};
            });
        }else {alert("this course is not available!")};
    };

    endLearningGroup(courseName, teacherName) {
        this.startedGroups = this.startedGroups.filter(group => (group.courseName === courseName && group.teacherName !== teacherName));
            this.maxGroup++

        this.availableCourses.forEach(course => {
            if(course.courseName === courseName) {
                course.availableTeachersAmount++
            };
        });
    };

    getLearningGroupByCourseName(courseName) {
         const groupByCourse = this.startedGroups.filter(group => group.courseName === courseName);
         return groupByCourse;
    };
};

const react = new ITSchool("React", "bla-bla", 5, 12);
console.log(react)




