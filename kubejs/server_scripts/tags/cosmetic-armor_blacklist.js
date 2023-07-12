////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const cosmetic = [
        'beachparty:crocs',

    ];

    cosmetic.forEach((item) => {
        event.add('cosmetic-armor:blacklist', item)
    });

});
