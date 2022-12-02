
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
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
