import * as User from './user';
import * as Lesson from './course';
import * as Reference from './reference';

module.exports = { ...User, ...Lesson, ...Reference };
