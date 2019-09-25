import References from '../model/references';
import SwiytComments from '../model/swiytComments';
import * as Includes from '../includes';

const { IncludeImage } = Includes;
const AllReferences = () => References.findAll({
  include: IncludeImage(),
});
const AllSwiytComments = () => SwiytComments.findAll({
  include: IncludeImage(),
});
module.exports =  {AllReferences,AllSwiytComments}
