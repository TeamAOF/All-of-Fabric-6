
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const recipes = [
    {
      output: 'twilightforest:spruce_banister',
      pattern: ['AA ', 'BB '],
      key: {
        A: 'minecraft:spruce_slab',
        B: 'minecraft:stick',
      },
      id: 'twilightforest:wood/spruce_banister'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
