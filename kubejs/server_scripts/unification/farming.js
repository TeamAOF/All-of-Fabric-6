
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const FOOD = [
    "tomato",
    "cabbage",
    "rice",
    "onion",
    "bacon",
    "cooked_bacon",
];

// Crops & Food
FOOD.forEach(function (item, index) {
  event.replaceInput('croptopia:' + item, 'farmersdelight:' + item)
});

// Garlic
event.replaceInput('croptopia:garlic', 'bewitchment:garlic')

  });

  onEvent('tags.blocks', event => {

    // Farmland
    event.add('c:farmland', 'byg:lush_farmland')
    event.add('c:farmland', 'farmersdelight:rich_soil_farmland')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich_stable')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy_stable')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_stable')
  });

  onEvent('tags.items', event => {

    // Milk
    event.add('fabric:milk', 'croptopia:milk_bottle')
    event.add('fabric:milk', 'croptopia:soy_milk')
    event.add('c:milks', 'farmersdelight:milk_bottle')
  });
