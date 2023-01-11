
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Shingles 
  const shingles = [
    'white',
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

    shingles.forEach((item) => {
    event.remove({ output: 'blockus:' + item + '_shingles' });
    event.shaped('6x blockus:' + item + '_shingles', [
      'AAA', 
      'AAA'
    ], {
        A: 'minecraft:' + item + '_terracotta',
      })
    });

    event.remove({ output: 'blockus:shingles' });
    event.shaped('6x blockus:shingles', [
      'AAA', 
      'AAA'
    ], {
        A: 'minecraft:terracotta',
      })
  });