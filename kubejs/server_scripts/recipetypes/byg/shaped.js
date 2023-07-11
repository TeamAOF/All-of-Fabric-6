
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const byg = [
    'aspen',
    'baobab',
    'blue_enchanted',
    'bulbis',
    'cherry',
    'cika',
    'cypress',
    'ebony',
    'ether',
    'fir',
    'green_enchanted',
    'holly',
    'imparius',
    'jacaranda',
    'lament',
    'mahogany',
    'maple',
    'nightshade',
    'palm',
    'pine',
    'rainbow_eucalyptus',
    'redwood',
    'skyris',
    'willow',
    'witch_hazel',
    'zelkova',
    'sythian',
    'embur',
  ];

  byg.forEach((byg) => {
    event.remove({ output: 'byg:' + byg + '_crafting_table' });
    event.shaped('byg:' + byg + '_crafting_table', [
      'AA ',
      'AA ',
      '   '
    ], {
      A: 'byg:' + byg + '_planks',
    })
  });
  const recipes = [

    // Therium Lantern
    {
      output: 'byg:therium_lantern',
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: 'minecraft:iron_nugget',
        B: 'byg:therium_crystal_shard'
      },
      id: 'byg:therium_lantern'
    },
    
    // Cryptic Lantern
    {
      output: 'byg:cryptic_lantern',
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:redstone_torch'
      },
      id: 'byg:cryptic_lantern'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
