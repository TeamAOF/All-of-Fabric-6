////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'medievalweapons:diamond_javelin',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: 'farmersdelight:diamond_knife',
        B: 'minecraft:stick'
    },
      id: 'medievalweapons:diamond_javelin'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
