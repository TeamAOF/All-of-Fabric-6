
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

    const recipes = [
      {
        output: Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
        pattern: ['AB ', 'B  '],
        key: {
          A: 'minecraft:book',
          B: '#c:amethyst_dusts',
        },
        id: 'aof:deeperdarker_book'
      },
    ];
  
    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });
  