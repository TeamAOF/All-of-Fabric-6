////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  
    event.custom({    
        "type": "modern_industrialization:assembler",
        "id": "aof:replicator",
        "eu": 32,
        "duration": 8000,
        "item_inputs": [
            {
                "item": "modern_industrialization:quantum_machine_hull",
                "amount": 1
            },
            {
                "item": "modern_industrialization:quantum_upgrade",
                "amount": 3
            },
            {
                "item": "modern_industrialization:quantum_circuit",
                "amount": 8
            },
            {
                "item": "botania:dice",
                "amount": 1
            }
        ],
        "fluid_inputs": [
            {
                "fluid": "modern_industrialization:uu_matter",
                "amount": 2000
            }
        ],
        "item_outputs": [
            {
                "item": "modern_industrialization:replicator",
                "amount": 1
            }
        ]
})
    })