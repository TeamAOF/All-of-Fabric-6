
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
    },

    // Spice Rack
    {
      output: 'cookingforblockheads:spice_rack',
      pattern: ['BAB'],
      key: {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:iron_nugget'
      },
      id: 'cookingforblockheads:spice_rack'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
