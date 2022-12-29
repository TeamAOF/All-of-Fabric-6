////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Flowers conversion to allow bee pollination/locate
    const small_flowers = [
        'srias_flowers:columbine',
        'srias_flowers:snowdrops',
        'srias_flowers:aloe_vera',
        'ecologics:azalea_flower'
    ];

    const tall_flowers = [
        'biomemakeover:foxglove',
        'biomemakeover:black_thistle',
        'srias_flowers:tall_hydrangea'
    ];

    small_flowers.forEach((item) => {
        event.add("minecraft:small_flowers", item)
    });

    tall_flowers.forEach((item) => {
        event.add("minecraft:tall_flowers", item)
    });

    // Dyes
    event.add("byg:brown_dye", "minecraft:cocoa_beans")

});

ServerEvents.tags('block', event => {

    // Flowers conversion to allow bee pollination/locate
    const small_flowers = [
        'srias_flowers:columbine',
        'srias_flowers:snowdrops',
        'srias_flowers:aloe_vera',
        'srias_flowers:fleabane',
        'srias_flowers:himalayan_poppy',
        'srias_flowers:hydrangea_bush',
        'srias_flowers:sunrise_daisy'
    ];

    const tall_flowers = [
        'srias_flowers:tall_hydrangea'
    ];

    small_flowers.forEach((item) => {
        event.add("minecraft:small_flowers", item)
        event.add("minecraft:flowers", item)
    });

    tall_flowers.forEach((item) => {
        event.add("minecraft:tall_flowers", item)
        event.add("minecraft:flowers", item)
    });
});
