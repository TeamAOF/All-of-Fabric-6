
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [

    // Chair
    {
      output: 'bakery:iron_chair',
      pattern: ['AAA', 'ABA'],
      key: {
        A: 'minecraft:iron_ingot',
        B: 'decorative_blocks:lattice',
      },
      id: 'bakery:iron_chair'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
