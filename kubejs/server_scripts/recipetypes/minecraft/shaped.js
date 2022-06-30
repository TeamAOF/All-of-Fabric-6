

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {
    
  const recipes = [
{
  output: 'minecraft:lectern',
  pattern: ['AAA', ' B ', ' A '],
  key: {
    A: '#minecraft:wooden_slabs',
    B: 'minecraft:bookshelf',
},
  id: 'aof:lectern'
},

    {
  output: 'minecraft:flint',
  pattern: ['AA ', 'A  ', '   '],
  key: {
    A: 'minecraft:gravel',
},
  id: 'aof:flint'
},
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
