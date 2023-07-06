////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Hashed Brown
    {
      output: '3x croptopia:hashed_brown',
      pattern: ['BCA'],
      key: {
        A: '#c:olive_oils',
        B: '#c:potatoes',
        C: 'croptopia:frying_pan'
      },
      id: 'croptopia:hashed_brown'
    },
    //Purple Dye
      {
      output: '1x minecraft:purple_dye',
      pattern: ['GP'],
      key: {
        G: 'croptopia:grape',
        P: 'croptopia:mortar_and_pestle'
      },
      id: 'croptopia:purple_dye'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
