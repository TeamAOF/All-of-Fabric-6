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
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
