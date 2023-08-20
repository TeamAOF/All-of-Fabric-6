let GROWTH_CHAMBER;

MIMachineEvents.registerRecipeTypes(e => {
    GROWTH_CHAMBER = e.register('growth_chamber')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        "Growth Chamber", // English Name
        "growth_chamber", // Internal Name
        GROWTH_CHAMBER, // recipe type
        ["bronze", "steel", "electric"], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(68, 45, "triple_arrow"), // progress bar
        e.efficiencyBar(39, 67), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot Configuration
        2, // Item input count
        8, // Item output count
        1, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(36, 28, 2, 1).addSlots(96, 28, 4, 2),
        fluids => fluids.addSlot(45, 46),
        
        // Model configuration
        true, // front overlay?
        true, // top overlay?
        true, // side overlay?
    );
});