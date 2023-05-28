
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [

    // Grapevine Steam
    {
      output: '6x vinery:grapevine_stem',
      pattern: ['A', 'A', 'A'],
      key: {
        A: '#minecraft:oak_logs',
      },
      id: 'vinery:grapevine_stem'
    },

    // Table
    {
      output: 'vinery:table',
      pattern: ['BBB', 'A A', 'C C'],
      key: {
        A: 'minecraft:spruce_planks',
        B: 'minecraft:spruce_slab',
        C: 'minecraft:stick',
      },
      id: 'vinery:table'
    },

    // Chair
    {
      output: 'vinery:chair',
      pattern: ['BAB', 'BBB', 'C C'],
      key: {
        A: 'minecraft:spruce_planks',
        B: 'minecraft:spruce_slab',
        C: 'minecraft:stick',
      },
      id: 'vinery:chair'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
