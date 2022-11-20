ServerEvents.recipes(event => {

    const spectrum = [
        'topaz',
        'amethyst',
        'citrine',
        'onyx'
    ];

    spectrum.forEach((item) => {
        event.custom({
            "type": "create:crushing",
            "group": "minecraft:misc",
            "ingredients": [
                {
                    "tag": "spectrum:" + item + "_ores"
                }
            ],
            "results": [
                {
                    "item": "spectrum:" + item + "_powder",
                    "count": 12
                },
                {
                    "item": "spectrum:" + item + "_powder",
                    "count": 4,
                    "chance": 0.25
                }
            ],
            "processingTime": 150
        })
    });
})