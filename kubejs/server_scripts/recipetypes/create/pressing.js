ServerEvents.recipes(event => {

    const plates = [
        'bronze',
        'tin',
        'lead',
        'silver',
        'nickel',
        'tungsten',
        'titanium',
        'chromium',
        'invar',
        'nickel',
        'platinum',
        'stainless_steel',
        'steel',
        'aluminum'

    ];

    plates.forEach((item) => {
        event.custom({
            "type": "create:pressing",
            "ingredients": [
                {
                    "tag": "c:" + item + "_ingots"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:" + item + "_plate",
                    "count": 1
                },
            ],
        })
    });

    event.custom({
    "type": "create:pressing",
    "ingredients": [
        {
            "item": "techreborn:refined_iron_ingot"
        }
    ],
    "results": [
        {
            "item": "techreborn:refined_iron_plate",
            "count": 1
        },
    ],
})
})