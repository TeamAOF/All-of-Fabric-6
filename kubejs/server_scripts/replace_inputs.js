onEvent('recipes', (event) => {

    
    event.replaceInput({}, '#c:steel_helmets', 'techreborn:steel_helmet');
    event.replaceInput({}, '#c:steel_chestplates', 'techreborn:steel_chestplate');
    event.replaceInput({}, '#c:steel_leggings', 'techreborn:steel_leggings');
    event.replaceInput({}, '#c:steel_boots', 'techreborn:steel_boots');
    
    event.replaceInput({}, '#c:wooden_chests', '#c:wooden_chests');
    
    event.replaceInput({}, '#c:workbench', '#c:workbench');

    event.replaceInput({}, '#c:barrel', '#c:barrel');

    event.replaceInput({id: "staffofbuilding:wooden_builder_staff"}, 'minecraft:oak_planks', '#minecraft:planks');

    event.replaceInput({id: "minecraft:oak_sign"}, 'minecraft:oak_planks', '#minecraft:planks');

    // Chromium
    event.replaceInput({}, 'techreborn:chrome_ingot', 'modern_industrialization:chromium_ingot');
    event.replaceInput({}, 'techreborn:chrome_nugget', 'modern_industrialization:chromium_nugget');
    event.replaceInput({}, 'techreborn:chrome_dust', 'modern_industrialization:chromium_dust');
    event.replaceInput({}, 'techreborn:chrome_plate', 'modern_industrialization:chromium_plate');
    event.replaceInput({}, 'techreborn:chrome_storage_block', 'modern_industrialization:chromium_block');

    // TConstruct

    event.replaceInput({}, 'tconstruct:copper_nugget', 'modern_industrialization:copper_nugget');
    
});