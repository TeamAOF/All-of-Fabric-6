
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {


  });

 ServerEvents.tags('item', event => {

    // Farmland
    event.add('c:farmland', 'byg:lush_farmland')
    event.add('c:farmland', 'farmersdelight:rich_soil_farmland')
    /*
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich_stable')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy_stable')
    event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_stable')
    */

    // Milk
    event.add('fabric:milk', 'croptopia:milk_bottle')
    event.add('fabric:milk', 'croptopia:soy_milk')
    event.add('c:milks', 'farmersdelight:milk_bottle')
  });
