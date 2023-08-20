let MYSTICAL_INCUBATOR;

MIMachineEvents.registerRecipeTypes(e => {
    MYSTICAL_INCUBATOR = e.register('mystical_incubator')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        "Mystical Incubator", // English Name
        "mystical_incubator", // Internal Name
        MYSTICAL_INCUBATOR, // recipe type
        ["electric"], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(79, 35, "triple_arrow"), // progress bar
        e.efficiencyBar(39, 67), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot Configuration
        2, // Item input count
        2, // Item output count
        1, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(36, 28, 2, 1).addSlots(108, 36, 2, 1),
        fluids => fluids.addSlot(45, 46),
        
        // Model configuration
        true, // front overlay?
        true, // top overlay?
        true, // side overlay?
    );
});