////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'campanion:rope_bridge_post',
      pattern: ['A A', 'A A', 'A A'],
      key: {
        A: '#minecraft:logs',
    },
      id: 'campanion:rope_bridge_post'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
