import Models from '../model';

const { Category, CategoryConnector, HasCategories } = Models;
export default() => {
  const model = {
    model: HasCategories,
    include: {
      model: Category,
      include: {
        model: CategoryConnector,
        include: {
          model: Category,
          include: {
            model: CategoryConnector,
            include: Category,
          },
        },
      },
    },
  };
  return model;
};
