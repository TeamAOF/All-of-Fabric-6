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

    const ores  = [
        'lead',
        'mozanite',
        'nickel',
        'salt',
        'tungsten',
        'antimony',
        'bauxite',
        'quartz',
    ];

    ores.forEach((item) => {
        event.custom({
            "type": "create:crushing",
            "group": "minecraft:misc",
            "ingredients": [
                {
                    "tag": "c:" + item + "_ores"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:" + item + "_dust",
                    "count": 2
                },
                {
                    "item": "modern_industrialization:" + item + "_dust",
                    "count": 1,
                    "chance": 0.25
                },
                {
                    "item": "create:experience_nugget",
                    "count": 1,
                    "chance": 0.75
                }
            ],
            "processingTime": 150
        })
    });
})