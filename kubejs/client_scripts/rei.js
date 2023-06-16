
const DELETED_ITEMS = [
    'croptosis:fertilized_sand',
    'croptosis:fertilized_farmland',
    'croptosis:fertilized_dirt',
    'croptosis:potash_ore',
    'croptosis:apatite_ore',
    'croptosis:deepslate_apatite_ore',
    'croptosis:potash_block',
    'croptosis:apatite_block',
    'croptosis:feather_meal',
    'croptosis:rotten_pile',
    'croptosis:apatite',
    'croptosis:potash',
    'croptosis:potash_pieces',
    'nethersdelight:iron_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    'nethersdelight:golden_machete',
    'adventurez:raw_venison',
    'adventurez:cooked_venison',
    'fishofthieves:earthworms',
    'fishofthieves:grubs',
    'blockus:oak_barrel',
    'blockus:birch_barrel',
    'blockus:jungle_barrel',
    'blockus:acacia_barrel',
    'blockus:dark_oak_barrel',
    'blockus:crimson_barrel',
    'blockus:warped_barrel',
    'blockus:white_oak_barrel',
    'blockus:bamboo_barrel',
    'blockus:charred_barrel',
    'compressed:soul_sand_i'
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
