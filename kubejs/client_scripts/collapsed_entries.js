function replaceAll(string, find, replace) {
    return string.replace(new RegExp(find, 'g'), replace)
}
function getNameOfID(id) {
    let output = "";
    id = replaceAll(id, ":", " ");
    id = replaceAll(id, "_", " ");

    let parts = id.split(" ");
    for (let i = 0; i < parts.length; i++) {
        output += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
        if (i < parts.length - 1) {
            output += " ";
        } else {
            output += "s";
        }
    }
    return output;
}
REIEvents.groupEntries(event => {
    Ingredient.of('@minecraft').getItemIds().forEach((id) => {
        let name = getNameOfID(id);
        id = id.replace('minecraft:', 'chipped:');
        let parts = id.split(':');
        event.groupItemsByTag(`kubejs:rei_groups/${parts[0]}/${parts[1]}`, name, id);
    });
    
    let terracottas = ['minecraft:terracotta'];
    for(let i=1; i<=66; i++){
        terracottas.push('chipped:terracotta_'+i);
    }
    event.groupItems('kubejs:reigroups/chipped/terracotta', getNameOfID('minecraft:terracotta'), terracottas);

    event.groupItemsByTag(`kubejs:rei_groups/chipped/mud`, 'Minecraft Packed Mud Blocks', 'chipped:packed_muc');
    event.groupItemsByTag(`kubejs:rei_groups/chipped/mud`, 'Minecraft Mud Blocks', 'chipped:mud');
    event.groupItemsByTag(`kubejs:rei_groups/chipped/waxed_exposed_copper`, 'Minecraft Waxed Exposed Copper Blocks', 'chipped:waxed_exposed_copper_block');
});