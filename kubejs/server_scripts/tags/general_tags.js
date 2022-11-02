////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Create / Tech Reborn

  event.add('c:zinc_plates', 'techreborn:zinc_plate')
  event.add('c:brass_plates', 'techreborn:brass_plate')

  /* 
  event.add('c:gold_plates', 'create:golden_sheet')
  event.add('c:iron_plates', 'create:iron_sheet')
  event.add('c:copper_plates', 'create:copper_sheet')
  */

  // Indrev

  event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
  event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
  event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
  event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')


  



});
