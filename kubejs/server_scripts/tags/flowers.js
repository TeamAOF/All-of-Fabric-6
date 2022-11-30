////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Flowers conversion to allow bee pollination/locate
    const small_flowers = [
        'srias_flowers:blue_poppy',
        'srias_flowers:hydrangea',
        'srias_flowers:crocus',
        'srias_flowers:snowdrops',
        'srias_flowers:orange_daisy',
        'ecologics:azalea_flower'
    ];

    const tall_flowers = [
        'biomemakeover:foxglove',
        'biomemakeover:black_thistle'
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
