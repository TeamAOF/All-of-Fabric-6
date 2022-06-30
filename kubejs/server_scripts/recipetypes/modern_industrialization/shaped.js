

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {
    
  const recipes = [
{
  output: 'modern_industrialization:lignite_coal_block',
  pattern: ['AAA', 'AAA', 'AAA'],
  key: {
    A: 'modern_industrialization:lignite_coal',
},
  id: 'modern_industrialization:materials/lignite_coal/craft/block_from_gem'
},
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
