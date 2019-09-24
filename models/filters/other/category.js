const _ = require('lodash');

export default (CategoryModel) => {
  const category = CategoryModel.category.toJSON();
  const filter = (cat) => _.pick(cat, [
    'uid',
    'name',
  ]);
  const filterCategory = filter(category);
  if (category.categories_connector) {
    filterCategory.parent = filter(category.categories_connector.category);
  }
  if (category.categories_connector.category.categories_connector) {
    filterCategory.parent.parent = filter(
      category.categories_connector.category.categories_connector.category,
    );
  }
  return filterCategory;
};
