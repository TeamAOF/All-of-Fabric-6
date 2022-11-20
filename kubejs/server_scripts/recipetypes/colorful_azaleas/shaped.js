
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const colorful_logs = [
    'titanium',
    'walnut',
    'tecal',
    'roze',
    'bright',
    'azule',
    'fiss',
    ];

    colorful_logs.forEach((item) => {
    event.remove({ output: 'colorful-azaleas:' + item + '_azalea_wood' });
    event.remove({ id: 'colorful-azaleas:' + item + '_azalea_log' });
    event.shaped('3x colorful-azaleas:' + item + '_azalea_wood', [
      'AA ', 
      'AA ', 
      '   '
    ], {
        A: 'colorful-azaleas:' + item + '_azalea_log',
      })
    });
  });
