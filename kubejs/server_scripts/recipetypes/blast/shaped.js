////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  // Gunpowder Block
  event.shaped("blast:gunpowder_block", [
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:coal_block", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
  ]);

});
