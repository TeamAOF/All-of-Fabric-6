////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Javelins
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
    },

    // Daggers
    {
      output: 'medievalweapons:diamond_dagger',
      pattern: ['A  ', 'B  '],
      key: {
        A: 'farmersdelight:diamond_knife',
        B: 'minecraft:stick'
      },
      id: 'medievalweapons:diamond_dagger'
    },
    {
      output: 'medievalweapons:iron_dagger',
      pattern: ['A  ', 'B  '],
      key: {
        A: 'farmersdelight:iron_knife',
        B: 'minecraft:stick'
      },
      id: 'medievalweapons:iron_dagger'
    },
    {
      output: 'medievalweapons:golden_dagger',
      pattern: ['A  ', 'B  '],
      key: {
        A: 'farmersdelight:golden_knife',
        B: 'minecraft:stick'
      },
      id: 'medievalweapons:golden_dagger'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
