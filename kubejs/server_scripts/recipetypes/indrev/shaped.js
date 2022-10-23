////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'indrev:machine_block',
      pattern: ['BAB', 'BCB', 'BAB'],
      key: {
        A: 'indrev:nikolite_dust',
        B: 'modern_industrialization:iron_plate',
        C: 'indrev:battery',
    },
      id: 'indrev:shaped/machine_block'
    },

    {
      output: '8x indrev:item_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'goldenhoppers:golden_hopper',
        B: 'modern_industrialization:iron_plate',
    },
      id: 'indrev:shaped/item_pipe_mk1'
    },

     {
      output: '8x indrev:fluid_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'kibe:fluid_hopper',
        B: 'modern_industrialization:iron_plate',
    },
      id: 'indrev:shaped/fluid_pipe_mk1'
    },

    {
      output: 'indrev:lazuli_flux_container_mk4',
      pattern: ['BCB', 'CAC', 'BCB'],
      key: {
        A: 'indrev:circuit_mk4',
        B: '#c:electrum_plates',
        C: 'indrev:lazuli_flux_container_mk3',
    },
      id: 'indrev:shaped/lazuli_flux_container_mk4'
    },

        {
      output: 'indrev:mining_drill_mk4',
      pattern: ['DCD', 'EAE', 'BFB'],
      key: {
        A: 'indrev:circuit_mk4',
        B: 'indrev:battery',
        C: 'indrev:netherite_drill_head',
        D: 'indrev:enriched_nikolite_ingot',
        E: 'modern_industrialization:steel_large_plate',
        F: 'indrev:modular_core_activated',
    },
      id: 'indrev:shaped/mining_drill_mk4'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
