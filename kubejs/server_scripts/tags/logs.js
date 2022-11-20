////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const colorful_logs = [
        'titanium',
        'walnut',
        'tecal',
        'roze',
        'bright',
        'azule',
        'fiss',
        ];

    colorful_logs.forEach((item) => {
        event.add("minecraft:logs", 'colorful-azaleas:' + item + '_azalea_log')
    });

});
