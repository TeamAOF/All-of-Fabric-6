////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Tempad
    {
      output: 'tempad:tempad',
      pattern: ['ACA', 'DBE', 'AFA'],
      key: {
        A: 'techreborn:hot_tungstensteel_ingot',
        B: 'minecraft:tinted_glass',
        C: 'fwaystones:pocket_wormhole',
        D: 'kibe:redstone_timer',
        E: 'modern_industrialization:analog_circuit',
        F: 'bosses_of_mass_destruction:charged_ender_pearl'
      },
      id: 'tempad:tempad'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
