////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Wood Pulp
    event.custom({    
      "type": "techreborn:grinder",
      "power": 3,
      "time": 100,
      "ingredients": [
        {
          "tag": "minecraft:logs"
        }
      ],
      "results": [
        {
          "item": "modern_industrialization:wood_pulp",
          "count": 10
        }
      ]
})

 // Prosperity Shards
 event.custom({    
  "type": "techreborn:grinder",
  "power": 2,
  "time": 100,
  "ingredients": [
    {
      "tag": "c:prosperity_ores"
    }
  ],
  "results": [
    {
      "item": "mysticalagriculture:prosperity_shard",
      "count": 2
    }
  ]
})
    })