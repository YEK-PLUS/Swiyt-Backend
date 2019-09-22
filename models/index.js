import getter from './getter';
import model from './model';
import filters from './filters';
import setter from './setter';
module.exports = { ...getter, ...model, ...filters,...setter };
