import * as User from './user';
import * as Lesson from './course';
import * as Other from './other';

module.exports = { ...User, ...Lesson, ...Other };
