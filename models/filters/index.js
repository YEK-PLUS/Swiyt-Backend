import * as User from './user';
import * as Course from './course';
import * as Others from './others';

module.exports = { ...User, ...Course, ...Others };
