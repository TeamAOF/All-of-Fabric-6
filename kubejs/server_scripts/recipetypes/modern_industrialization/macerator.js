////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {


  event.custom({
    "type": "modern_industrialization:macerator",
    "id": "aof:mi_macerator_pervaded_netherrack",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "byg:pervaded_netherrack",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:glowstone_dust",
        "amount": 2
      }
    ]
  })

  event.custom({
    "type": "modern_industrialization:macerator",
    "id": "aof:mi_macerator_crushed_zinc_ore",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "tag": "c:ores/zinc",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "create:crushed_zinc_ore",
        "amount": 2
      }
    ]
  })
})