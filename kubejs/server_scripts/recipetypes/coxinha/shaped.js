////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Drying Rack
    {
      output: 'coxinhautilities:drying_rack',
      pattern: ['B B', 'AAA'],
      key: {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:iron_nugget'
      },
      id: 'coxinhautilities:drying_rack'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
