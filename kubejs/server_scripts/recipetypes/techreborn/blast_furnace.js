////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  
    event.custom({    
        "type": "techreborn:blast_furnace",
        "power": 128,
        "time": 700,
        "heat": 1700,
        "ingredients" : [
          {
            "item": "modern_industrialization:platinum_dust",
            "count": 2
          }
        ],
        "results" : [
          {
            "item": "modern_industrialization:platinum_hot_ingot",
            "count": 1
          }
        ]
})
    })