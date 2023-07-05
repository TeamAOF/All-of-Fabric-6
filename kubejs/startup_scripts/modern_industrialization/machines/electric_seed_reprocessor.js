let ELECTRIC_SEED_REPROCESSOR;

MIMachineEvents.registerRecipeTypes(e => {
    ELECTRIC_SEED_REPROCESSOR = e.register('electric_seed_reprocessor')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        "Seed Reprocessor", // English Name
        "electric_seed_reprocessor", // Internal Name
        ELECTRIC_SEED_REPROCESSOR, // recipe type
        ["electric"], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(80, 34, "centrifuge"), // progress bar
        e.efficiencyBar(39, 67), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot Configuration
        1, // Item input count
        1, // Item output count
        0, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(60, 37, 1, 1).addSlots(104, 37, 1, 1),
        fluids => {},
        
        // Model configuration
        true, // front overlay?
        true, // top overlay?
        false, // side overlay?
    );
});