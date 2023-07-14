ServerEvents.recipes(event => {

    // Tree Fertilizer
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:flowers",
            },
            {
                "tag": "minecraft:flowers",
            },
            {
                "item": "botania:fertilizer",
            },
            {
                "fluid": "minecraft:water",
                "amount": 81000
            }
        ],
        "results": [
            {
                "item": "create:tree_fertilizer",
                "count": 4
            },
        ],
    })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:saplings",
            },
            {
                "tag": "c:saplings",
            },
            {
                "item": "botania:fertilizer",
            },
            {
                "fluid": "minecraft:water",
                "amount": 81000
            }
        ],
        "results": [
            {
                "item": "create:tree_fertilizer",
                "count": 3
            },
        ],
    })

    // Glue
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:bone_meal",
            },
            {
                "item": "minecraft:bone_meal",
            },
            {
                "item": "minecraft:bone_meal",
            },
            {
                "item": "minecraft:bone_meal",
            },
            {
                "fluid": "modern_industrialization:acrylic_glue",
                "amount": 4050
            }
        ],
        "results": [
            {
                "item": "kubejs:glue",
                "count": 5
            },
        ],
    })
})