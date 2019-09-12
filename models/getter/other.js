import References from '../model/references';
import SwiytComments from '../model/swiytComments';
import * as Includes from '../includes';

const { IncludeImage } = Includes;
export const AllReferences = () => References.findAll({
  include: IncludeImage,
});
export const AllSwiytComments = () => SwiytComments.findAll({
  include: IncludeImage,
});
