import Course from '../model/course';
import * as Includes from '../includes';

const {
  IncludeLesson,
} = Includes;
const JustCourse = (all,props) => {
  const re_props = typeof all === 'string' ? props : all;
  const re_all = typeof all !== 'string' ? 'findOne' : all;
  return Course[re_all](IncludeLesson(re_props));
}

module.exports = {
  JustCourse,
};
