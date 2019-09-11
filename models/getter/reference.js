import References from '../model/references';
import * as Includes from '../includes';

const { IncludeImage } = Includes;
export const AllReferences = () => References.findAll({
  include: IncludeImage,
});
