ServerEvents.recipes(event => {

    //Empty Fertilizer Bag
    event.custom({
        "type": "modern_industrialization:assembler",
        "id": "aof:mi_assembler_empty_fertilizer_bag",
        "eu": 5,
        "duration": 200,
        "item_inputs": 
            {
                "item": "minecraft:paper",
                "amount": 7
            },
        "fluid_inputs": 
            {
                "fluid": "modern_industrialization:acrylic_glue",
                "amount": 15
            },
        "item_outputs": [
            {
            "item": "kubejs:empty_fertilizer_bag",
            "amount": 2
            }
        ]
    })
})
