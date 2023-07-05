////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {
    
  const recipes = [
{
  output: 'beachparty:sand_dirty',
  pattern: ['AB'],
  key: {
    A: '#c:sand',
    B: 'minecraft:stick',
},
  id: 'beachparty:sand_dirty'
},

{
  output: 'beachparty:sand_seastars',
  pattern: ['AB'],
  key: {
    A: '#c:sand',
    B: '#c:dye',
},
  id: 'beachparty:sand_seastars_2'
},

{
  output: 'beachparty:sand_seastars',
  pattern: ['AB'],
  key: {
    A: '#c:sand',
    B: 'ecologics:seashell',
},
  id: 'beachparty:sand_seastars'
},
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
