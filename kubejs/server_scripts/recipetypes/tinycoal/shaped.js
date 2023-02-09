////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'minecraft:coal',
      pattern: ['AAA', 'A A', 'AAA'],
      key: {
        A: 'tinycoal:tinycoal',
    },
      id: 'aof:tiny_to_coal'
    },
    {
      output: 'minecraft:charcoal',
      pattern: ['AAA', 'A A', 'AAA'],
      key: {
        A: 'tinycoal:tinycharcoal',
    },
      id: 'aof:tiny_to_charcoal'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
