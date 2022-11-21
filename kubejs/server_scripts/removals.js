ServerEvents.recipes( (event) => {

    const id = [
    'indrev:shapeless/steel_dust',
    'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:rolling_machine/minecart',
    'croptopia:tomato_to_tomato_seed_shapeless',
    'croptopia:onion_to_onion_seed_shapeless',
    'croptopia:rice_to_rice_seed_shapeless',
    'croptopia:cabbage_to_cabbage_seed_shapeless',
    'techreborn:compressor/iridium_plate',
    'techreborn:compressor/iridium_plate_from_block',
    'indrev:infusing/steel_dust',
    'indrev:infusing/electrum_dust',
    'indrev:compressing/empty_upgrade',
    'techreborn:crafting_table/machine_block/basic_machine_frame_alt',
    'techreborn:crafting_table/machine/iron_furnace',
    'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores',
    'techreborn:blasting/platinum_ingot_from_c_sheldonite_ores',
    'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores_exported_mi_furnace',
    'modern_industrialization:compat/indrev/quarry_nikolite',
    'modern_industrialization:compat/ae2/quarry_ae2',
    'ad_astra:hammering/iron_plate',
    'ad_astra:recipes/steel_ingot_from_smelting_iron_ingot',
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'create:smelting/platinum_ingot_compat_modern_industrialization',
    'create:blasting/platinum_ingot_compat_modern_industrialization',
    'indrev:smelting/tungsten_ingot_from_raw_ores',
    'createplus:createplus/ore_processing/nickel/modern_industrialization/smelting',
    'travelersbackpack:travelers_backpack',
    'catwalksinc:iron_rod',
    'twilightforest:jeed/hunger',
    'bewitchment:silver_ingot_from_smelting_deepslate_silver_ore',
    'bewitchment:silver_ingot_from_blasting_deepslate_silver_ore',
    'bewitchment:silver_ingot_from_smelting_raw_silver',
    'bewitchment:silver_ingot_from_blasting_raw_silver',
    'bewitchment:raw_silver',
    'bewitchment:raw_silver_block',

    ];

    const output = [
    'blockus:white_oak_small_logs',
    'blockus:dark_oak_small_logs',
    'blockus:acacia_small_logs',
    'blockus:jungle_small_logs',
    'blockus:birch_small_logs',
    'blockus:spruce_small_logs',
    'blockus:oak_small_logs',
    'blockus:golden_bars',
    'kibe:angel_ring',
    'kibe:light_ring',
    'chisel:chisel',
    'vanilla-excavators:obsidian_excavator',
    'vanilla-hammers:obsidian_hammer',
    'croptopia:bacon',
    'croptopia:cooked_bacon',
    'croptopia:knife',
    'bewitchment:raw_silver_block',
    'modern_industrialization:uu_matter',
    'basicaiots:tin_aiot',
    'basicaiots:copper_aiot',
    'basicaiots:silver_aiot',
    'basicaiots:steel_aiot',
    'basicaiots:lead_aiot',
    'craftingcraft:portable_crafting',
    'kibe:pocket_crafting_table',
    'indrev:bronze_sword',
    'indrev:bronze_pickaxe',
    'indrev:bronze_axe',
    'indrev:bronze_shovel',
    'indrev:bronze_hoe',
    'kibe:big_torch',
    'dwarfcoal:dwarf_charcoal',
    'mtmechs:iron_gear_item',
    'indrev:hammer',
    'additionaladditions:gilded_netherite_helmet',
    'additionaladditions:gilded_netherite_chestplate',
    'additionaladditions:gilded_netherite_leggings',
    'additionaladditions:gilded_netherite_boots',
    'campanion:mre',
    'additionaladditions:fried_egg',
    'twilightforest:uncrafting_table',
    'kibe:slime_sling',
    'kibe:slime_boots',
    'twilightforest:jeed/hunger',
    'techreborn:steel_helmet',
    'techreborn:steel_chestplate',
    'techreborn:steel_leggings',
    'techreborn:steel_boots',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });

    const plates = [
        'tin',
        'gold',
        'iron',
        'copper',
      
        ];
      
          plates.forEach((plates) => {
              event.remove({ id: 'indrev:shapeless/' + plates + '_plate_from_hammer' });
          });
});
