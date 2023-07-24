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
    "id": "aof:mi_macerator_crushed_raw_zinc",
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
        "item": "create:crushed_raw_zinc",
        "amount": 2
      }
    ]
  })

  const spectrum = [
    'topaz',
    'amethyst',
    'citrine',
    'onyx'
];

  spectrum.forEach((item) => { 
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "tag": "spectrum:" + item + "_ores",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "spectrum:" + item + "_powder",
        "amount": 16
      }
    ]
  })
});

// Prosperity Shards
event.custom({
  "type": "modern_industrialization:macerator",
  "id": "aof:mi_macerator_prosperity_shards",
  "eu": 2,
  "duration": 200,
  "item_inputs": [
    {
      "tag": "c:prosperity_ores",
      "amount": 1
    }
  ],
  "item_outputs": [
    {
      "item": "mysticalagriculture:prosperity_shard",
      "amount": 2
    }
  ]
})

})