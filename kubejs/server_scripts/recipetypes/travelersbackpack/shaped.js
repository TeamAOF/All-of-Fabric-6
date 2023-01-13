
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'travelersbackpack:white_sleeping_bag',
      pattern: ['BBB', 'AAA'],
      key: {
        A: 'minecraft:white_wool',
        B: 'minecraft:string'
      },
      id: 'travelersbackpack:white_sleeping_bag'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
