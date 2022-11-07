ServerEvents.recipes(event => {

    event.replaceInput({output: 'indrev:modular_armor_helmet'}, 'indrev:steel_helmet', 'techreborn:steel_helmet');
    event.replaceInput({output: 'indrev:modular_armor_chest'}, 'indrev:steel_chestplate', 'techreborn:steel_chestplate');
    event.replaceInput({output: 'indrev:modular_armor_legs'}, 'indrev:steel_leggings', 'techreborn:steel_leggings');
    event.replaceInput({output: 'indrev:modular_armor_boots'}, 'indrev:steel_boots', 'techreborn:steel_boots');
    
    event.replaceInput({}, 'c:wooden_chests', '#c:wooden_chests');
    
    event.replaceInput({}, 'c:workbench', '#c:workbench');

    event.replaceInput({}, 'c:barrel', '#c:barrel');

});