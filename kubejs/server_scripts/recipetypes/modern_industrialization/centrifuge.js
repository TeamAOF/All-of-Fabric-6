////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  
    event.custom({    
        "type": "modern_industrialization:centrifuge",
        "id": "aof:thatch_to_plant_oil",
        "eu": 8,
        "duration": 100,
        "fluid_inputs": [
          {
            "fluid": "decorative_blocks:thatch",
            "amount": 1000,
          }
        ],
        "fluid_outputs": [
          {
            "fluid": "modern_industrialization:plant_oil",
            "amount": 850
          }
        ]
})
    })