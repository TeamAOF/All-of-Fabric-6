
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Lamps
  const macaws_lamps = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'black',
    'red'
  ];

  macaws_lamps.forEach((item) => {
    event.remove({ output: 'mcwlights:' + item + '_lamp' });
    event.remove({ output: 'mcwlights:' + item + '_ceiling_light' });
    event.shaped('6x mcwlights:' + item + '_lamp', [
      'AAA',
      'ABA',
      ' C '
    ], {
      A: 'minecraft:' + item + '_wool',
      B: 'minecraft:redstone_lamp',
      C: '#c:fences/wooden'
    })
    event.shaped('6x mcwlights:' + item + '_ceiling_light', [
      ' C ',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:' + item + '_wool',
      B: 'minecraft:redstone_lamp',
      C: '#c:fences/wooden'
    })
  });

  // Top Roofs
  const roofs = [
    'oak',
    'birch',
    'spruce',
    'jungle',
    'dark_oak',
    'acacia',
    'crimson',
    'warped',
  ];

  roofs.forEach((item) => {
    event.remove({ output: 'mcwroofs:' + item + '_planks_top_roof' });
    event.shaped('9x mcwroofs:' + item + '_planks_top_roof', [
      ' A ',
      'ABA',
    ], {
      A: 'minecraft:' + item + '_planks',
      B: 'minecraft:stick',
    })
  });
});
