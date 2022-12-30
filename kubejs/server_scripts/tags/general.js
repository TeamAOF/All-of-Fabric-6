////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {


  // Diamond

  event.add('c:gems/diamond', 'minecraft:diamond')

  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Knives

  event.add('c:knives', 'farmersdelight:flint_knife')
  event.add('c:knives', 'farmersdelight:iron_knife')
  event.add('c:knives', 'farmersdelight:golden_knife')
  event.add('c:knives', 'farmersdelight:diamond_knife')
  event.add('c:knives', 'farmersdelight:netherite_knife')

const bw_fleece = [
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'light_gray',
  'gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

bw_fleece.forEach((item) => {
  event.add("bwplus:fleece", 'bwplus:' + item + "_witch_wool")
 })
});

ServerEvents.tags('block', event => {

  // Graves fix
  event.add('minecells:conjunctivius_unbreakable', 'yigd:grave')

});
