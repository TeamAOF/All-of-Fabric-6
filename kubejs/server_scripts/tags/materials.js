////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Create (Common Tag Conversion)
    const create_ingots_blocks = [
        'zinc',
        'brass',
    ];

    const create_nuggets = [
        'copper',
        'brass',
        'zinc'
    ];

    const create_plates = [
        'copper',
        'iron',
        'brass',
    ];

    const create_crushed = [
        'copper',
        'iron',
        'gold',
        'zinc',
        'uranium',
        'silver',
        'tin',
        'lead',
        'nickel'
    ];

    create_ingots_blocks.forEach((item) => {
        event.add("c:" + item + "_ingots", "create:" + item + "_ingot")
        event.add("c:" + item + "_blocks", "create:" + item + "_block")
    });

    create_nuggets.forEach((item) => {
        event.add("c:" + item + "_nuggets", "create:" + item + "_nugget")
    });

    create_plates.forEach((item) => {
        event.add("c:" + item + "_plates", "create:" + item + "_sheet")
    });

    /*
    create_crushed.forEach((item) => {
        event.add("c:" + item + "_dusts", "create:crushed_" + item + "_ore")
    });
    */

    // Misc
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_nuggets", "create:brass_nugget")
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_blocks", "create:brass_block")
    event.add("c:raw_zinc_ores", "create:raw_zinc")
    event.add("c:gold_plates", "create:golden_sheet")

    event.add("c:plates/gold", "modern_industrialization:gold_plate")
    event.add("c:plates/iron", "modern_industrialization:iron_plate")
    event.add("c:plates/copper", "modern_industrialization:copper_plate")
    event.add("c:nuggets/copper", "modern_industrialization:copper_nugget")
    event.add("c:plates/bronze", "modern_industrialization:bronze_plate")
    // event.add("c:dusts/uranium", "modern_industrialization:uranium_dust")
    // event.add("c:dusts/silver", "modern_industrialization:silver_dust")
    // event.add("c:dusts/tin", "modern_industrialization:tin_dust")

    event.add("c:plates/brass", "techreborn:brass_plate")
    event.add("c:nuggets/zinc", "techreborn:zinc_nugget")

});
