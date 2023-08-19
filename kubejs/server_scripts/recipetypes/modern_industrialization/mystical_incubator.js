ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let mysticalIncubator = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('mystical_incubator'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe);
    }


    // -- - and water to crops
    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/inferium_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:inferium_seeds'), probability: 0 }

        ],
        [
            { amount: 2, item: ('mysticalagriculture:inferium_essence') },
            { amount: 1, item: ('mysticalagriculture:inferium_seeds'), probability: 0.05 }

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/air_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:air_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:air_essence') },
            { amount: 1, item: ('mysticalagriculture:air_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/earth_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:earth_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:earth_essence') },
            { amount: 1, item: ('mysticalagriculture:earth_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/water_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:water_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:water_essence') },
            { amount: 1, item: ('mysticalagriculture:water_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/fire_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:fire_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:fire_essence') },
            { amount: 1, item: ('mysticalagriculture:fire_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/stone_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:stone_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:stone_essence') },
            { amount: 1, item: ('mysticalagriculture:stone_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/dirt_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:dirt_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:dirt_essence') },
            { amount: 1, item: ('mysticalagriculture:dirt_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/wood_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:wood_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:wood_essence') },
            { amount: 1, item: ('mysticalagriculture:wood_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:ice_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:ice_essence') },
            { amount: 1, item: ('mysticalagriculture:ice_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/deepslate_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.10 },
            { amount: 1, item: ('mysticalagriculture:deepslate_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:deepslate_essence') },
            { amount: 1, item: ('mysticalagriculture:deepslate_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/nature_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:nature_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:nature_essence') },
            { amount: 1, item: ('mysticalagriculture:nature_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/dye_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:dye_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:dye_essence') },
            { amount: 1, item: ('mysticalagriculture:dye_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/nether_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:nether_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:nether_essence') },
            { amount: 1, item: ('mysticalagriculture:nether_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/coal_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:coal_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:coal_essence') },
            { amount: 1, item: ('mysticalagriculture:coal_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/coral_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:coral_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:coral_essence') },
            { amount: 1, item: ('mysticalagriculture:coral_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/honey_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:honey_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:honey_essence') },
            { amount: 1, item: ('mysticalagriculture:honey_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/amethyst_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:amethyst_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:amethyst_essence') },
            { amount: 1, item: ('mysticalagriculture:amethyst_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/pig_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:pig_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:pig_essence') },
            { amount: 1, item: ('mysticalagriculture:pig_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/chicken_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:chicken_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:chicken_essence') },
            { amount: 1, item: ('mysticalagriculture:chicken_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/cow_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:cow_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:cow_essence') },
            { amount: 1, item: ('mysticalagriculture:cow_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/sheep_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:sheep_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:sheep_essence') },
            { amount: 1, item: ('mysticalagriculture:sheep_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/squid_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:squid_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:squid_essence') },
            { amount: 1, item: ('mysticalagriculture:squid_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/fish_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:fish_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:fish_essence') },
            { amount: 1, item: ('mysticalagriculture:fish_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/slime_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:slime_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:slime_essence') },
            { amount: 1, item: ('mysticalagriculture:slime_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/turtle_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:turtle_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:turtle_essence') },
            { amount: 1, item: ('mysticalagriculture:turtle_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/iron_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:iron_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:iron_essence') },
            { amount: 1, item: ('mysticalagriculture:iron_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/copper_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:copper_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:copper_essence') },
            { amount: 1, item: ('mysticalagriculture:copper_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/nether_quartz_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:nether_quartz_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:nether_quartz_essence') },
            { amount: 1, item: ('mysticalagriculture:nether_quartz_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/glowstone_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:glowstone_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:glowstone_essence') },
            { amount: 1, item: ('mysticalagriculture:glowstone_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/redstone_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:redstone_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:redstone_essence') },
            { amount: 1, item: ('mysticalagriculture:redstone_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/obsidian_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:obsidian_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:obsidian_essence') },
            { amount: 1, item: ('mysticalagriculture:obsidian_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/prismarine_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:prismarine_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:prismarine_essence') },
            { amount: 1, item: ('mysticalagriculture:prismarine_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/zombie_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:zombie_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:zombie_essence') },
            { amount: 1, item: ('mysticalagriculture:zombie_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/skeleton_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:skeleton_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:skeleton_essence') },
            { amount: 1, item: ('mysticalagriculture:skeleton_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/creeper_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:creeper_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:creeper_essence') },
            { amount: 1, item: ('mysticalagriculture:creeper_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/spider_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:spider_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:spider_essence') },
            { amount: 1, item: ('mysticalagriculture:spider_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/rabbit_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:rabbit_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:rabbit_essence') },
            { amount: 1, item: ('mysticalagriculture:rabbit_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/gold_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:gold_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:gold_essence') },
            { amount: 1, item: ('mysticalagriculture:gold_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/lapis_lazuli_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:lapis_lazuli_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:lapis_lazuli_essence') },
            { amount: 1, item: ('mysticalagriculture:lapis_lazuli_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/end_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:end_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:end_essence') },
            { amount: 1, item: ('mysticalagriculture:end_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/experience_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:experience_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:experience_essence') },
            { amount: 1, item: ('mysticalagriculture:experience_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/blaze_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:blaze_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:blaze_essence') },
            { amount: 1, item: ('mysticalagriculture:blaze_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/ghast_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:ghast_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:ghast_essence') },
            { amount: 1, item: ('mysticalagriculture:ghast_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/enderman_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:enderman_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:enderman_essence') },
            { amount: 1, item: ('mysticalagriculture:enderman_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/diamond_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.50 },
            { amount: 1, item: ('mysticalagriculture:diamond_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:diamond_essence') },
            { amount: 1, item: ('mysticalagriculture:diamond_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/emerald_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.50 },
            { amount: 1, item: ('mysticalagriculture:emerald_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:emerald_essence') },
            { amount: 1, item: ('mysticalagriculture:emerald_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/netherite_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.50 },
            { amount: 1, item: ('mysticalagriculture:netherite_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:netherite_essence') },
            { amount: 1, item: ('mysticalagriculture:netherite_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/wither_skeleton_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.50 },
            { amount: 1, item: ('mysticalagriculture:wither_skeleton_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:wither_skeleton_essence') },
            { amount: 1, item: ('mysticalagriculture:wither_skeleton_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/sulfur_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:sulfur_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:sulfur_essence') },
            { amount: 1, item: ('mysticalagriculture:sulfur_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/tin_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:tin_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:tin_essence') },
            { amount: 1, item: ('mysticalagriculture:tin_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/bronze_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:bronze_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:bronze_essence') },
            { amount: 1, item: ('mysticalagriculture:bronze_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/zinc_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:zinc_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:zinc_essence') },
            { amount: 1, item: ('mysticalagriculture:zinc_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/brass_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:brass_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:brass_essence') },
            { amount: 1, item: ('mysticalagriculture:brass_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/silver_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:silver_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:silver_essence') },
            { amount: 1, item: ('mysticalagriculture:silver_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/lead_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:lead_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:lead_essence') },
            { amount: 1, item: ('mysticalagriculture:lead_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/nickel_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:nickel_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:nickel_essence') },
            { amount: 1, item: ('mysticalagriculture:nickel_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/nikolite_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:nikolite_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:nikolite_essence') },
            { amount: 1, item: ('mysticalagriculture:nikolite_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/antimony_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:antimony_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:antimony_essence') },
            { amount: 1, item: ('mysticalagriculture:antimony_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/sky_stone_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:sky_stone_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:sky_stone_essence') },
            { amount: 1, item: ('mysticalagriculture:sky_stone_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/certus_quartz_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.30 },
            { amount: 1, item: ('mysticalagriculture:certus_quartz_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:certus_quartz_essence') },
            { amount: 1, item: ('mysticalagriculture:certus_quartz_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/fluix_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:fluix_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:fluix_essence') },
            { amount: 1, item: ('mysticalagriculture:fluix_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/rubber_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.20 },
            { amount: 1, item: ('mysticalagriculture:rubber_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:rubber_essence') },
            { amount: 1, item: ('mysticalagriculture:rubber_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/ruby_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:ruby_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:ruby_essence') },
            { amount: 1, item: ('mysticalagriculture:ruby_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/sapphire_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:sapphire_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:sapphire_essence') },
            { amount: 1, item: ('mysticalagriculture:sapphire_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    mysticalIncubator(
        ('aof6:modern_industrialization/mystical_agriculture/peridot_essence'),
        14,
        800,
        [
            { amount: 1, item: ('mysticalagriculture:mystical_fertilizer'), probability: 0.40 },
            { amount: 1, item: ('mysticalagriculture:peridot_seeds'), probability: 0 }

        ],
        [
            { amount: 1, item: ('mysticalagriculture:peridot_essence') },
            { amount: 1, item: ('mysticalagriculture:peridot_seeds'), probability: 0.05 }
            

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );
});