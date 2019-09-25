import Models from '../model';

const { Images, Cdn } = Models;
export default (as) => {
  let model = {
    model: Images,
    include: Cdn,
  };
  model = (as ? { ...model, as } : model);
  return model;
};
