let GROWTH_CHAMBER;

MIMachineEvents.registerRecipeTypes(e => {
    GROWTH_CHAMBER = e.register('growth_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {

    const glass = e.memberOfBlock('minecraft:glass');
    const block = e.memberOfBlock('ad_astra:steel_plating');
    const grass = e.memberOfBlock('botania:vivid_grass');
    const sapling = e.memberOfBlock('twilightforest:transformation_sapling');
    const lamp = e.memberOfBlock('blockus:orange_redstone_lamp_lit');
    const growthChamberHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');

    const growthChamberShape = e.layeredShape('steel_plate_casing', [
        //y=0      1      2
        [ ' BBB ', ' GGG ', ' GGG ', ' GGG ', ' GGG ', '     '],
        [ 'BRRRB', 'G   G', 'G   G', 'G   G', 'G   G', ' GGG '],
        [ 'BRRRB', 'G P G', 'G   G', 'G   G', 'G   G', ' GOG '],
        [ 'BRRRB', 'G   G', 'G   G', 'G   G', 'G   G', ' GGG '],
        [ ' B#B ', ' GGG ', ' GGG ', ' GGG ', ' GGG ', '     ']
    ])
        .key('B', block, growthChamberHatch)
        .key('R', grass, e.noHatch())
        .key('G', glass, e.noHatch())
        .key('P', sapling, e.noHatch())
        .key('O', lamp, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        "Growth Chamber", // English name
        "growth_chamber", // internal name
        GROWTH_CHAMBER, // recipe type
        growthChamberShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, "triple_arrow"),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 6, 10),
        fluidInputs => fluidInputs.addSlot(56, 55),
        fluidOutputs => {},
        
        /* Model Configuration */
        "steel_plate_casing", // casing of the controller
        "growth_chamber", // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});