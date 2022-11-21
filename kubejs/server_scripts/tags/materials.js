////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Create (Common Tag Conversion)
    const create_materials = [
        'zinc'
    ];

    create_materials.forEach((item) => {
        event.add("c:" + item + "_ingots", "create:" + item + "_ingot")
        event.add("c:" + item + "_nuggets", "create:" + item + "_nugget")
        event.add("c:" + item + "_blocks", "create:" + item + "_block")
        event.add("c:" + item + "_dusts", "create:crushed_" + item + "_ore")
    });

    const create_plates = [
        'copper',
        'iron',
        'brass',
    ];

    create_plates.forEach((item) => {
        event.add("c:" + item + "_plates", "create:" + item + "_sheet")
    });
    event.add("c:plates/gold", "modern_industrialization:gold_plate")
    event.add("c:plates/iron", "modern_industrialization:iron_plate")
    event.add("c:plates/copper", "modern_industrialization:copper_plate")
    event.add("c:plates/bronze", "modern_industrialization:bronze_plate")
    event.add("c:plates/brass", "techreborn:brass_plate")
    event.add("c:gold_plates", "create:golden_sheet")

    const create_crushed = [
        'copper',
        'iron',
        'gold',
    ];

    create_crushed.forEach((item) => {
        event.add("c:" + item + "_dusts", "create:crushed_" + item + "_ore")
    });

    // Misc
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_nuggets", "create:brass_nugget")
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_blocks", "create:brass_block")
    event.add("c:raw_zinc_ores", "create:raw_zinc")

});
