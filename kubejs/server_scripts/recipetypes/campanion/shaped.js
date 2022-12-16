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
    },
    {
      output: '8x campanion:skipping_stone',
      pattern: ['AA'],
      key: {
        A: 'minecraft:cobblestone',
    },
      id: 'campanion:skipping_stone'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
