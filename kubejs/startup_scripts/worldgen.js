const ORES_TO_REMOVE = ["techreborn:bauxite_ore", "techreborn:deepslate_bauxite_ore", "techreborn:iridium_ore", "techreborn:deepslate_iridium_ore", "techreborn:lead_ore", "techreborn:deepslate_lead_ore", "techreborn:tin_ore", "techreborn:deepslate_tin_ore", "techreborn:deepslate_tungsten_ore", "techreborn:tungsten_ore"];

onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ORES_TO_REMOVE;
    })
});