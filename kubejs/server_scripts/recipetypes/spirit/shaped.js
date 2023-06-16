////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Soul Sand (Compressed)
    {
      output: '9x spirit:compressed_soul_sand',
      pattern: ['A'],
      key: {
        A: 'compressed:soul_sand_ii'
      },
      id: 'aof:compressed_soul_sand'
    },
    {
      output: 'compressed:soul_sand_ii',
      pattern: ['AAA', 'AAA', 'AAA'],
      key: {
        A: 'spirit:compressed_soul_sand'
      },
      id: 'compressed:soul_sand_i_pack'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
