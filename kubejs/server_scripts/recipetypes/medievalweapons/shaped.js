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
    },
    {
      output: 'medievalweapons:iron_javelin',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: 'farmersdelight:iron_knife',
        B: 'minecraft:stick'
    },
      id: 'medievalweapons:iron_javelin'
    },
    {
      output: 'medievalweapons:stone_javelin',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: 'minecraft:stone',
        B: 'minecraft:stick'
    },
      id: 'medievalweapons:stone_javelin'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
