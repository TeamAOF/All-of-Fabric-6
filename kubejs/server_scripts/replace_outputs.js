onEvent('recipes', (event) => {

    // Chromium
    event.replaceOutput({}, 'techreborn:chrome_ingot', 'modern_industrialization:chromium_ingot');
    event.replaceOutput({}, 'techreborn:chrome_nugget', 'modern_industrialization:chromium_nugget');
    event.replaceOutput({}, 'techreborn:chrome_dust', 'modern_industrialization:chromium_dust');
    event.replaceOutput({}, 'techreborn:chrome_plate', 'modern_industrialization:chromium_plate');
    event.replaceOutput({}, 'techreborn:chrome_storage_block', 'modern_industrialization:chromium_block');

    event.replaceOutput({}, '#c:steel_helmets', 'techreborn:steel_helmet');
    event.replaceOutput({}, '#c:steel_chestplates', 'techreborn:steel_chestplate');
    event.replaceOutput({}, '#c:steel_leggings', 'techreborn:steel_leggings');
    event.replaceOutput({}, '#c:steel_boots', 'techreborn:steel_boots');

    event.replaceOutput({}, 'indrev:silver_helmet', 'techreborn:silver_helmet');
    event.replaceOutput({}, 'indrev:silver_chestplate', 'techreborn:silver_chestplate');
    event.replaceOutput({}, 'indrev:silver_legging', 'techreborn:silver_leggings');
    event.replaceOutput({}, 'indrev:silver_boots', 'techreborn:silver_boots');

    event.replaceOutput({}, 'indrev:bronze_helmet', 'techreborn:bronze_helmet');
    event.replaceOutput({}, 'indrev:bronze_chestplate', 'techreborn:bronze_chestplate');
    event.replaceOutput({}, 'indrev:bronze_legging', 'techreborn:bronze_leggings');
    event.replaceOutput({}, 'indrev:bronze_boots', 'techreborn:bronze_boots');

    event.replaceOutput({id: "techreborn:industrial_grinder/sheldonite_ore_with_water"}, '#c:platinum_dusts', 'modern_industrialization:raw_platinum');
    event.replaceOutput({id: "techreborn:industrial_grinder/sheldonite_ore_with_mercury"}, '#c:platinum_dusts', 'modern_industrialization:raw_platinum');
    event.replaceOutput({id: "techreborn:industrial_grinder/iridium_ore_with_sodiumpersulfate"}, '#c:platinum_dusts', 'modern_industrialization:raw_platinum');
    event.replaceOutput({id: "techreborn:industrial_grinder/heart_of_the_sea_with_mercury"}, '#c:platinum_dusts', 'modern_industrialization:raw_platinum');

    event.replaceOutput({}, 'create:crushed_platinum_ore', 'modern_industrialization:raw_platinum');

      // TConstruct

      event.replaceOutput({}, 'tconstruct:copper_nugget', 'modern_industrialization:copper_nugget');
});