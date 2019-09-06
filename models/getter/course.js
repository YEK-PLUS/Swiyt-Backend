import Course from '../model/course';
import * as Includes from '../includes';

const { IncludeCourse } = Includes;
export const PopulerCourses = () => Course.findAll({
  limit: 5,
  include: IncludeCourse,
});
