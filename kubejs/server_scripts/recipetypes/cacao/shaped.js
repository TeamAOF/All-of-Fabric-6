
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'cacao:pressed_cocoa_cone',
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: 'minecraft:cocoa_beans',
        B: 'croptopia:food_press'
      },
      id: 'cacao:pressed_cocoa_cone'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
