
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: '6x vinery:grapevine_stem',
      pattern: ['A', 'A', 'A'],
      key: {
        A: '#minecraft:oak_logs',
      },
      id: 'vinery:grapevine_stem'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
