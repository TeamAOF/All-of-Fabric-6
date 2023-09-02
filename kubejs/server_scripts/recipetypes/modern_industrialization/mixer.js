////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {


  // Tree Fertilizer
  event.custom({
    "type": "modern_industrialization:mixer",
    "id": "aof:mi_mixer_tree_fertilizer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "item": "botania:fertilizer",
        "amount": 1
      },
      {
        "tag": "minecraft:saplings",
        "amount": 2
      }
    ],
    "fluid_inputs": [
      {
        "fluid": "minecraft:water",
        "amount": 1,
        "probability": 0
      }
    ],
    "item_outputs": {
      "item": "create:tree_fertilizer",
      "amount": 4
    }
  })

  // Tree Fertilizer
  event.custom({
    "type": "modern_industrialization:mixer",
    "id": "aof:mi_mixer_tree_fertilizer_2",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "item": "botania:fertilizer",
        "amount": 1
      },
      {
        "tag": "minecraft:flowers",
        "amount": 2
      }
    ],
    "fluid_inputs": [
      {
        "fluid": "minecraft:water",
        "amount": 1,
        "probability": 0
      }
    ],
    "item_outputs": {
      "item": "create:tree_fertilizer",
      "amount": 5
    }
  })

   // Glue
   event.custom({
    "type": "modern_industrialization:mixer",
    "id": "aof:mi_mixer_glue",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "item": "minecraft:bone_meal",
        "amount": 4
      }
    ],
    "fluid_inputs": [
      {
        "fluid": "modern_industrialization:acrylic_glue",
        "amount": 40
      }
    ],
    "item_outputs": {
      "item": "kubejs:glue",
      "amount": 5
    }
  })

  // Botania Flowers Fertilizer
  event.custom({
    "type": "modern_industrialization:mixer",
    "id": "aof:mi_mixer_botania_fertilizer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "item": "botania:fertilizer",
        "amount": 1
      },
      {
        "tag": "botania:petals",
        "amount": 2
      },
      {
        "item": "kubejs:empty_fertilizer_bag",
        "amount": 1
      }
    ],
    "item_outputs": {
      "item": "kubejs:botania_fertilizer",
      "amount": 4
    }
  })

  //floral fertilizer
  event.custom({
    "type": "modern_industrialization:mixer",
    "id": "aof:mi_mixer_floral_fertilizer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "tag": "c:dye",
        "amount": 4
      },
      {
        "item": "minecraft:bone_meal",
        "amount": 1
      }
    ],
    "item_outputs": {
      "item": "botania:fertilizer",
      "amount": 1
    }
  })
})
