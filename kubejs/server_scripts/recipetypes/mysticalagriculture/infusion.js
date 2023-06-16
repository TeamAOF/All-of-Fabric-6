////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  
    event.custom({    
      "type": "mysticalagriculture:infusion",
  "conditions": [
    {
      "type": "mysticalagriculture:augment_enabled",
      "augment": "mysticalagriculture:flight"
    }
  ],
  "input": {
    "item": "mysticalagriculture:unattuned_augment"
  },
  "ingredients": [
    {
      "item": "piercingpaxels:upgrade_unbreakable"
    },
    {
      "item": "mysticalagriculture:awakened_supremium_ingot"
    },
    {
      "item": "twilightforest:peacock_feather_fan"
    },
    {
      "item": "mysticalagriculture:awakened_supremium_ingot"
    },
    {
      "item": "besmirchment:final_broom"
    },
    {
      "item": "mysticalagriculture:awakened_supremium_ingot"
    },
    {
      "item": "bosses_of_mass_destruction:charged_ender_pearl"
    },
    {
      "item": "mysticalagriculture:awakened_supremium_ingot"
    }
  ],
  "result": {
    "item": "mysticalagriculture:flight_augment"
}
    })
  })