ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let basicGrowthChamber = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('basic_growth_chamber'),
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

    // -- bonemeal and water to vanilla crops
    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_minecraft_crops'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 1, item: ('minecraft:wheat'), probability: 0.02 },
            { amount: 1, item: ('minecraft:sugar_cane'), probability: 0.02 },
            { amount: 1, item: ('minecraft:carrot'), probability: 0.02 },
            { amount: 1, item: ('minecraft:potato'), probability: 0.02 },
            { amount: 1, item: ('minecraft:poisonous_potato'), probability: 0.01 },
            { amount: 1, item: ('minecraft:beetroot'), probability: 0.02 },
            { amount: 1, item: ('minecraft:sweet_berries'), probability: 0.02 },
            { amount: 1, item: ('minecraft:glow_berries'), probability: 0.01 },
            { amount: 1, item: ('minecraft:cocoa_beans'), probability: 0.02 },
            { amount: 1, item: ('minecraft:pumpkin'), probability: 0.02 },
            { amount: 1, item: ('minecraft:melon'), probability: 0.02 },
            { amount: 1, item: ('minecraft:bamboo'), probability: 0.02 },
            { amount: 1, item: ('minecraft:kelp'), probability: 0.02 },
            { amount: 1, item: ('minecraft:cactus'), probability: 0.02 },
            { amount: 1, item: ('minecraft:lily_pad'), probability: 0.02 },
            { amount: 1, item: ('minecraft:spore_blossom'), probability: 0.02 },
            { amount: 1, item: ('minecraft:twisting_vines'), probability: 0.02 }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_oak_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('minecraft:oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_spruce_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:spruce_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('minecraft:spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:spruce_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_birch_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:birch_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('minecraft:birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:birch_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_jungle_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:jungle_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:jungle_log') },
            { amount: 1, item: ('minecraft:jungle_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:jungle_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_acacia_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:acacia_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:acacia_log') },
            { amount: 1, item: ('minecraft:acacia_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:acacia_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_dark_oak_sapling'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:dark_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:dark_oak_log') },
            { amount: 1, item: ('minecraft:dark_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:dark_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    basicGrowthChamber(
        ('aof6:modern_industrialization/steam_mangrove_propagule'),
        2,
        300,
        [
            { amount: 1, item: ('minecraft:mangrove_propagule'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:mangrove_log') },
            { amount: 1, item: ('minecraft:mangrove_propagule'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:mangrove_leaves'), probability: 0.2 },
            { amount: 1, item: ('minecraft:mangrove_roots'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );
});
