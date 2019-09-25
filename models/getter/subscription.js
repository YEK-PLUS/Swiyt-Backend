import Subscription from '../model/subscription';
import * as Includes from '../includes';

const { IncludeSubscription } = Includes;
const JustSubsription = (all, props) => {
  const re_props = typeof all === 'string' ? props : all;
  const re_all = typeof all !== 'string' ? 'findOne' : all;
  return Subscription[re_all](IncludeSubscription(re_props));
};

module.exports = {
  JustSubsription,
};
