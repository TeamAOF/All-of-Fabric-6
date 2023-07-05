let ELECTRIC_COMPOSTER;

MIMachineEvents.registerRecipeTypes(e => {
    ELECTRIC_COMPOSTER = e.register('electric_composter')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        "Electric Composter", // English Name
        "electric_composter", // Internal Name
        ELECTRIC_COMPOSTER, // recipe type
        ["electric"], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(103, 26, "centrifuge"), // progress bar
        e.efficiencyBar(39, 67), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot Configuration
        3, // Item input count
        1, // Item output count
        1, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(44, 29, 3, 1).addSlots(133, 29, 1, 1),
        fluids => fluids.addSlots(62, 47, 1, 1),
        
        // Model configuration
        true, // front overlay?
        true, // top overlay?
        true, // side overlay?
    );
});