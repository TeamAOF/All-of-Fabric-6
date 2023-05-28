
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'rechiseled:chisel',
      pattern: [' A', 'B '],
      key: {
        A: 'minecraft:iron_ingot',
        B: 'campanion:wooden_rod',
      },
      id: 'rechiseled:chisel'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
