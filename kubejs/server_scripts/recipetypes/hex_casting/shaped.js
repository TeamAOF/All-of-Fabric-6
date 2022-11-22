
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'hexcasting:scroll_small',
      pattern: ['AB ', 'A  '],
      key: {
        A: 'minecraft:paper',
        B: 'minecraft:amethyst_shard',
      },
      id: 'hexcasting:scroll_small'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
