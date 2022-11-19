////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Create (Common Tag Conversion)
    const create_materials = [
        'zinc'
    ];

    create_materials.forEach((item) => {
        event.add("c:" + item +"_ingots", "create:" + item + "_ingot")
        event.add("c:" + item +"_nuggets", "create:" + item + "_nugget")
        event.add("c:" + item +"_blocks", "create:" + item + "_block")
        event.add("c:" + item +"_dusts", "create:crushed_" + item + "_ore")
    });

    const create_plates = [
        'copper',
        'iron',
        'brass',
    ];

    create_plates.forEach((item) => {
        event.add("c:" + item +"_plates", "create:" + item + "_sheet")
    });

    const create_crushed = [
        'copper',
        'iron',
        'gold',
    ];

    create_crushed.forEach((item) => {
        event.add("c:" + item +"_dusts", "create:crushed_" + item + "_ore")
    });

    event.add("c:gold_plates", "create:golden_sheet")
    event.add("c:brass_ingots", "create:brass_ingot")

});
