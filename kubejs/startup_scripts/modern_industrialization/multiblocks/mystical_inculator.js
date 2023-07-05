let MYSTICAL_INCUBATOR;

MIMachineEvents.registerRecipeTypes(e => {
    MYSTICAL_INCUBATOR = e.register('mystical_incubator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {

    const glass = e.memberOfBlock('minecraft:glass');
    const block = e.memberOfBlock('mysticalagriculture:machine_frame');
    const grass = e.memberOfBlock('botania:vivid_grass');
    const farmland = e.memberOfBlock('mysticalagriculture:supremium_farmland');
    const pedestal = e.memberOfBlock('mysticalagriculture:infusion_pedestal');
    const lamp = e.memberOfBlock('blockus:orange_redstone_lamp_lit');
    const mysticalIncubatorHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');

    const mysticalIncubatorShape = e.layeredShape('mystical_agriculture_machine_frame', [
        //y=0      1      2
        [ ' BBB ', ' GGG ', ' GGG ', ' GGG ', ' GGG ', '     '],
        [ 'BRPRB', 'GI IG', 'G   G', 'G   G', 'G   G', ' GGG '],
        [ 'BPPPB', 'G   G', 'G   G', 'G   G', 'G   G', ' GOG '],
        [ 'BRPRB', 'GI IG', 'G   G', 'G   G', 'G   G', ' GGG '],
        [ ' B#B ', ' GGG ', ' GGG ', ' GGG ', ' GGG ', '     ']
    ])
        .key('B', block, mysticalIncubatorHatch)
        .key('R', grass, e.noHatch())
        .key('G', glass, e.noHatch())
        .key('P', farmland, e.noHatch())
        .key('O', lamp, e.noHatch())
        .key('I', pedestal, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        "Mystical Incubator", // English name
        "mystical_incubator", // internal name
        MYSTICAL_INCUBATOR, // recipe type
        mysticalIncubatorShape, // multiblock shape

        // REI Display configuration
        e.progressBar(76, 33, "triple_arrow"),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(35, 35, 2, 1), 
        itemOutputs => itemOutputs.addSlots(102, 35, 1, 4),
        fluidInputs => fluidInputs.addSlot(35, 56),
        fluidOutputs => {},
        
        /* Model Configuration */
        "mystical_agriculture_machine_frame", // casing of the controller
        "mystical_incubator", // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});