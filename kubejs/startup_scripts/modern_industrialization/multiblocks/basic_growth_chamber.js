let BASIC_GROWTH_CHAMBER;

MIMachineEvents.registerRecipeTypes(e => {
    BASIC_GROWTH_CHAMBER = e.register('basic_growth_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {

    const glass = e.memberOfBlock('minecraft:glass');
    const block = e.memberOfBlock('minecraft:bricks');
    const grass = e.memberOfBlock('minecraft:grass_block');
    const sapling = e.memberOfBlock('minecraft:oak_sapling');
    const lamp = e.memberOfBlock('blockus:purple_redstone_lamp_lit');
    const growthChamberHatch = e.hatchOf('item_input', 'item_output', 'fluid_input');

    const basicGrowthChamberShape = e.layeredShape('bricks', [
        //y=0      1      2
        [ 'BBB', 'GGG', 'GGG', 'GGG', 'GGG'],
        [ 'BRB', 'GPG', 'G G', 'G G', 'GOG'],
        [ 'B#B', 'GGG', 'GGG', 'GGG', 'GGG']
    ])
        .key('B', block, growthChamberHatch)
        .key('R', grass, e.noHatch())
        .key('G', glass, e.noHatch())
        .key('P', sapling, e.noHatch())
        .key('O', lamp, e.noHatch())
        .build();

    e.simpleSteamCraftingMultiBlock(
        // General parameters
        "Basic Growth Chamber", // English name
        "basic_growth_chamber", // internal name
        BASIC_GROWTH_CHAMBER, // recipe type
        basicGrowthChamberShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, "triple_arrow"),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 6, 3),
        fluidInputs => fluidInputs.addSlot(56, 55),
        fluidOutputs => {},
        
        /* Model Configuration */
        "bricks", // casing of the controller
        "basic_growth_chamber", // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});