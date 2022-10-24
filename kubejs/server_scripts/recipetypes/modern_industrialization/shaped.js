

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Iron Plate from Hammer
  event.shaped('modern_industrialization:iron_plate', [
    'BA ',
    'AA '
  ], {
    B: Item.of('ad_astra:hammer').ignoreNBT(),
    A: 'minecraft:iron_ingot'
  }).damageIngredient(0).keepIngredient('ad_astra:hammer')
    
  const recipes = [
{
  output: 'modern_industrialization:lignite_coal_block',
  pattern: ['AAA', 'AAA', 'AAA'],
  key: {
    A: 'modern_industrialization:lignite_coal',
},
  id: 'modern_industrialization:materials/lignite_coal/craft/block_from_gem'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
