////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 3600,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:titanium_dusts"
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:titanium_hot_ingot"
    }
  ]
})

event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 800,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:chromium_tiny_dusts",
      "count": 9
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:chromium_ingot"
    }
  ]
})

event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 3600,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:platinum_dusts"
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:platinum_hot_ingot"
    }
  ]
})
    })