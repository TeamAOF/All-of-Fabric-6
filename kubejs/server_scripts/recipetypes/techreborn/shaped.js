
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const recipes = [
    {
      output: 'techreborn:compressor',
      pattern: ['BBB', 'ADA', 'ACA'],
      key: {
        A: 'minecraft:stone',
        B: 'modern_industrialization:iron_plate',
        C: 'techreborn:basic_machine_frame',
        D: 'techreborn:electronic_circuit'
      },
      id: 'techreborn:crafting_table/machine/compressor'
    },
    {
      output: 'techreborn:basic_machine_frame',
      pattern: ['AAA', 'ABA', 'ACA'],
      key: {
        A: 'techreborn:refined_iron_plate',
        B: 'techreborn:electronic_circuit',
        C: 'modern_industrialization:iron_gear'
      },
      id: 'techreborn:crafting_table/machine_block/basic_machine_frame'
    },
    {
      output: 'techreborn:grinder',
      pattern: ['DCD', 'EBE', 'EAE'],
      key: {
        A: 'techreborn:basic_machine_frame',
        B: 'techreborn:red_cell_battery',
        C: 'indrev:fan',
        D: 'minecraft:flint',
        E: 'modern_industrialization:iron_plate'
      },
      id: 'techreborn:crafting_table/machine/grinder'
    },
        {
      output: 'techreborn:alloy_smelter',
      pattern: ['CEC', 'DAD', 'CBC'],
      key: {
        A: 'techreborn:basic_machine_frame',
        B: 'techreborn:low_voltage_su',
        C: 'techreborn:advanced_alloy_plate',
        D: 'techreborn:electric_furnace',
        E: 'techreborn:advanced_circuit'
      },
      id: 'techreborn:crafting_table/machine/alloy_smelter'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
