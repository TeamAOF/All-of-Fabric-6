ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let electricSeedReprocessor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('electric_seed_reprocessor'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe);
    }


    // -- making croptopia fertilizer
    electricSeedReprocessor(
        ('aof6:modern_industrialization/inferium_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:inferium_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:inferium_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/air_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:air_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:air_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/earth_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:earth_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:earth_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/water_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:water_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:water_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/fire_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:fire_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:fire_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/stone_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:stone_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:stone_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/dirt_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:dirt_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:dirt_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/wood_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:wood_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:wood_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/ice_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:ice_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:ice_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/deepslate_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:deepslate_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:deepslate_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/nature_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:nature_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:nature_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/dye_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:dye_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:dye_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/nether_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:nether_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:nether_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/coal_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:coal_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:coal_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/coral_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:coral_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:coral_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/honey_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:honey_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:honey_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/amethyst_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:amethyst_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:amethyst_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/pig_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:pig_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:pig_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/chicken_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:chicken_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:chicken_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/cow_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:cow_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:cow_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/sheep_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:sheep_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:sheep_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/squid_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:squid_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:squid_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/fish_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:fish_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:fish_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/slime_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:slime_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:slime_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/turtle_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:turtle_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:turtle_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/iron_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:iron_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:iron_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/copper_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:copper_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:copper_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/nether_quartz_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:nether_quartz_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:nether_quartz_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/glowstone_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:glowstone_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:glowstone_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/redstone_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:redstone_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:redstone_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/obsidian_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:obsidian_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:obsidian_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/prismarine_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:prismarine_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:prismarine_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/zombie_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:zombie_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:zombie_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/skeleton_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:skeleton_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:skeleton_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/creeper_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:creeper_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:creeper_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/spider_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:spider_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:spider_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/rabbit_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:rabbit_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:rabbit_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/gold_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:gold_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:gold_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/lapis_lazuli_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:lapis_lazuli_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:lapis_lazuli_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/end_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:end_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:end_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/experience_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:experience_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:experience_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/blaze_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:blaze_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:blaze_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/ghast_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:ghast_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:ghast_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/enderman_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:enderman_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:enderman_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/diamond_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:diamond_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:diamond_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/emerald_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:emerald_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:emerald_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/netherite_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:netherite_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:netherite_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/wither_skeleton_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:wither_skeleton_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:wither_skeleton_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/sulfur_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:sulfur_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:sulfur_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/tin_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:tin_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:tin_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/bronze_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:bronze_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:bronze_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/zinc_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:zinc_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:zinc_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/brass_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:brass_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:brass_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/silver_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:silver_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:silver_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/lead_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:lead_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:lead_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/nickel_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:nickel_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:nickel_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/nikolite_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:nikolite_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:nikolite_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/antimony_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:antimony_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:antimony_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/sky_stone_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:sky_stone_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:sky_stone_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/certus_quartz_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:certus_quartz_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:certus_quartz_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/fluix_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:fluix_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:fluix_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/rubber_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:rubber_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:rubber_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/ruby_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:ruby_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:ruby_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/sapphire_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:sapphire_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:sapphire_essence'), probabiliy: 0.80 }
        ]
    );

    electricSeedReprocessor(
        ('aof6:modern_industrialization/peridot_seedtoessence'),
        8,
        100,
        [
            { amount: 1, item: ('mysticalagriculture:peridot_seeds') }
        ],
        [
            { amount: 2, item: ('mysticalagriculture:peridot_essence'), probabiliy: 0.80 }
        ]
    );
});