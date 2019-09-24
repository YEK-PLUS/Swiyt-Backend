const _ = require('lodash');
module.exports = (Model) => {
  if(_.has(Model,'rows') && _.has(Model,'count')){
    return {model:Model.rows,count:Model.count};
  }
  return Model;
}
