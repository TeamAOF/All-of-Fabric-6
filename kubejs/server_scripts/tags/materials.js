////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const create_materials = [
        'zinc'
    ];

    create_materials.forEach((item) => {
        event.add("c:" + item +"_ingots", "create:" + item + "_ingot")
        event.add("c:" + item +"_nuggets", "create:" + item + "_nugget")
        event.add("c:" + item +"_blocks", "create:" + item + "_block")
        event.add("c:" + item +"_dusts", "create:crushed_" + item + "_ore")
    });

});
