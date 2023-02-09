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
},

{
  output: 'wands:iron_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: '#c:iron_ingots',
    B: 'campanion:wooden_rod',
},
  id: 'wands:iron_wand'
},

{
  output: 'wands:diamond_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: 'minecraft:diamond',
    B: 'campanion:wooden_rod',
},
  id: 'wands:diamond_wand'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
