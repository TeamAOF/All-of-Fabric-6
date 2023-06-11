////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {


  // Tools

  const axes = event.get('c:axes').getObjectIds()
  axes.forEach(axe => {
    event.add('c:tools/axes', axe)
  })

  const pickaxes = event.get('c:pickaxes').getObjectIds()
  pickaxes.forEach(pickaxe => {
    event.add('c:tools/pickaxes', pickaxe)
  })

  const shovels = event.get('c:shovels').getObjectIds()
  shovels.forEach(shovel => {
    event.add('c:tools/shovels', shovel)
  })

});
