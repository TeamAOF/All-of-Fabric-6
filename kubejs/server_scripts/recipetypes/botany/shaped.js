////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {
    
  const recipes = [
{
  output: 'wands:stone_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: '#c:cobblestone',
    B: 'campanion:wooden_rod',
},
  id: 'wands:stone_wand'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
