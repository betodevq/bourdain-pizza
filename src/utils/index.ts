export const flattenPizzaIngredients = (items) => {
  return items.map((item) => ({
    ...item,
    pizza: {
      ...item.pizza,
      ingredients: item.pizza.ingredients.map((i) => i.name),
    },
  }));
}