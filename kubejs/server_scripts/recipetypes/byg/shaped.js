
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

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
    'mangrove',
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
  });
