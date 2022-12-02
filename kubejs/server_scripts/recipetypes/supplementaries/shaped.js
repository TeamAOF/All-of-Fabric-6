////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Timber Frame
    {
      output: 'supplementaries:timber_frame',
      pattern: ['AAA', 'A A', 'AAA'],
      key: {
        A: 'minecraft:stick'
      },
      id: 'supplementaries:timber_frame'
    },

    // Doors / Trapdoors
    {
      output: '3x supplementaries:silver_door',
      pattern: ['AA ', 'AA ', 'AA '],
      key: {
        A: '#c:silver_ingots'
      },
      id: 'supplementaries:silver_door'
    },
    {
      output: '2x supplementaries:silver_trapdoor',
      pattern: ['AAA', 'AAA'],
      key: {
        A: '#c:silver_ingots'
      },
      id: 'supplementaries:silver_trapdoor'
    },
    {
      output: '3x supplementaries:lead_door',
      pattern: ['AA ', 'AA ', 'AA '],
      key: {
        A: '#c:lead_ingots'
      },
      id: 'supplementaries:lead_door'
    },
    {
      output: '2x supplementaries:lead_trapdoor',
      pattern: ['AAA', 'AAA'],
      key: {
        A: '#c:lead_ingots'
      },
      id: 'supplementaries:lead_trapdoor'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
