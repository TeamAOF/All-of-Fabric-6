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
    },
    {
      output: 'supplementaries:jar_boat',
      pattern: ['AB '],
      key: {
        A: 'supplementaries:jar',
        B: 'minecraft:oak_boat'
      },
      id: 'supplementaries:boat_jar'
    },
    {
      output: 'supplementaries:item_shelf',
      pattern: ['AAA', 'B B'],
      key: {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:iron_nugget'
      },
      id: 'supplementaries:item_shelf'
    },

    // Stone Tiles
    {
      output: '2x supplementaries:stone_tile',
      pattern: ['AA'],
      key: {
        A: 'minecraft:stone_bricks',
      },
      id: 'supplementaries:stone_tile'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
