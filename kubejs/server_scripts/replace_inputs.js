ServerEvents.recipes(event => {

    event.replaceInput({}, 'c:steel_helmets', 'techreborn:steel_helmet');
    event.replaceInput({}, 'c:steel_chestplates', 'techreborn:steel_chestplate');
    event.replaceInput({}, 'c:steel_leggings', 'techreborn:steel_leggings');
    event.replaceInput({}, 'c:steel_boots', 'techreborn:steel_boots');
    
    event.replaceInput({}, 'c:wooden_chests', '#c:wooden_chests');
    
    event.replaceInput({}, 'c:workbench', '#c:workbench');

    event.replaceInput({}, 'c:barrel', '#c:barrel');

    event.replaceInput({id: "minecraft:oak_sign"}, 'minecraft:oak_planks', 'minecraft:planks');

});