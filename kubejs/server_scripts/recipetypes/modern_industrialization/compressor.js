////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  
    event.custom({    
        "type": "modern_industrialization:compressor",
        "id": "aof:mi_compressor_brass_plate",
        "eu": 2,
        "duration": 200,
        "item_inputs": [
          {
            "item": "create:brass_ingot",
            "amount": 1
          }
        ],
        "item_outputs": [
          {
            "item": "create:brass_sheet",
            "amount": 1
          }
        ]
})
    })