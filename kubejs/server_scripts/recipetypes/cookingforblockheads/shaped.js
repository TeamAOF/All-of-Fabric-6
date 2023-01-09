
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'cookingforblockheads:tool_rack',
      pattern: ['AAA', 'BCB', 'B B'],
      key: {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:iron_nugget',
        C: 'minecraft:stick'
      },
      id: 'cookingforblockheads:tool_rack'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
