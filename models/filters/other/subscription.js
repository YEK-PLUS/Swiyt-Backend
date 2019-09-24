const _ = require('lodash');
import FilterUser from '../user/user';
import FilterCourse from '../course/course';

module.exports = (LessonModel) => {
  const lesson = LessonModel.toJSON();
  const filteredLesson = _.pick(lesson, [
    'uid',
    'lessons_uid',
    'users_uid',
    'wish_list',
  ]);
  if (_.has(lesson, 'user')) {
    filteredLesson.user = FilterUser(LessonModel.user);
  }
  if (_.has(lesson, 'lesson')) {
    filteredLesson.lesson = FilterCourse(LessonModel.lesson);
  }
  return filteredLesson;
};
