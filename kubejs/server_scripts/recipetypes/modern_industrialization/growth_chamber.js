ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let growthChamber = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('growth_chamber'),
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


    // -- croptopia fertilizer and water to crops
    growthChamber(
        ('aof6:modern_industrialization/a_croptopia_crops'),
        12,
        600,
        [
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.33 }
        ],
        [
            { amount: 1, item: ('croptopia:artichoke'), probability: 0.02 },
            { amount: 1, item: ('croptopia:asparagus'), probability: 0.02 },
            { amount: 1, item: ('croptopia:barley'), probability: 0.02 },
            { amount: 1, item: ('croptopia:basil'), probability: 0.02 },
            { amount: 1, item: ('croptopia:bellpepper'), probability: 0.02 },
            { amount: 1, item: ('croptopia:blackbean'), probability: 0.02 },
            { amount: 1, item: ('croptopia:blackberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:blueberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:broccoli'), probability: 0.02 },
            { amount: 1, item: ('croptopia:cantaloupe'), probability: 0.02 },
            { amount: 1, item: ('croptopia:cauliflower'), probability: 0.02 },
            { amount: 1, item: ('croptopia:celery'), probability: 0.02 },
            { amount: 1, item: ('croptopia:chile_pepper'), probability: 0.02 },
            { amount: 1, item: ('croptopia:coffee_beans'), probability: 0.02 },
            { amount: 1, item: ('croptopia:corn'), probability: 0.02 },
            { amount: 1, item: ('croptopia:cranberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:cucumber'), probability: 0.02 },
            { amount: 1, item: ('croptopia:currant'), probability: 0.02 },
            { amount: 1, item: ('croptopia:eggplant'), probability: 0.02 },
            { amount: 1, item: ('croptopia:elderberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:ginger'), probability: 0.02 },
            { amount: 1, item: ('croptopia:grape'), probability: 0.02 },
            { amount: 1, item: ('croptopia:greenbean'), probability: 0.02 },
            { amount: 1, item: ('croptopia:greenonion'), probability: 0.02 },
            { amount: 1, item: ('croptopia:honeydew'), probability: 0.02 },
            { amount: 1, item: ('croptopia:hops'), probability: 0.02 },
            { amount: 1, item: ('croptopia:kale'), probability: 0.02 },
            { amount: 1, item: ('croptopia:kiwi'), probability: 0.02 },
            { amount: 1, item: ('croptopia:leek'), probability: 0.02 },
            { amount: 1, item: ('croptopia:lettuce'), probability: 0.02 },
            { amount: 1, item: ('croptopia:mustard'), probability: 0.02 },
            { amount: 1, item: ('croptopia:oat'), probability: 0.02 },
            { amount: 1, item: ('croptopia:olive'), probability: 0.02 },
            { amount: 1, item: ('croptopia:peanut'), probability: 0.02 },
            { amount: 1, item: ('croptopia:pepper'), probability: 0.02 },
            { amount: 1, item: ('croptopia:pineapple'), probability: 0.02 },
            { amount: 1, item: ('croptopia:radish'), probability: 0.02 },
            { amount: 1, item: ('croptopia:raspberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:rhubarb'), probability: 0.02 },
            { amount: 1, item: ('croptopia:rutabaga'), probability: 0.02 },
            { amount: 1, item: ('croptopia:saguaro'), probability: 0.02 },
            { amount: 1, item: ('croptopia:soybean'), probability: 0.02 },
            { amount: 1, item: ('croptopia:spinach'), probability: 0.02 },
            { amount: 1, item: ('croptopia:squash'), probability: 0.02 },
            { amount: 1, item: ('croptopia:strawberry'), probability: 0.02 },
            { amount: 1, item: ('croptopia:sweetpotato'), probability: 0.02 },
            { amount: 1, item: ('croptopia:tea_leaves'), probability: 0.02 },
            { amount: 1, item: ('croptopia:tomatillo'), probability: 0.02 },
            { amount: 1, item: ('croptopia:turmeric'), probability: 0.02 },
            { amount: 1, item: ('croptopia:turnip'), probability: 0.02 },
            { amount: 1, item: ('croptopia:vanilla'), probability: 0.02 },
            { amount: 1, item: ('croptopia:yam'), probability: 0.02 },
            { amount: 1, item: ('croptopia:zucchini'), probability: 0.02 },
            { amount: 1, item: ('farmersdelight:cabbage'), probability: 0.02 },
            { amount: 1, item: ('farmersdelight:tomato'), probability: 0.02 },
            { amount: 1, item: ('farmersdelight:onion'), probability: 0.02 },
            { amount: 1, item: ('farmersdelight:rice'), probability: 0.02 },
            { amount: 1, item: ('farmersdelight:rotten_tomato'), probability: 0.02 },

        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]

    
    );

    // -- croptopia mulch and water to trees
    growthChamber(
        ('aof6:modern_industrialization/a_croptopia_trees'),
        12,
        600,
        [
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.33 }
        ],
        [
            { amount: 2, item: ('croptopia:almond'), probability: 0.02 },
            { amount: 2, item: ('minecraft:apple'), probability: 0.02 },
            { amount: 2, item: ('croptopia:apricot'), probability: 0.02 },
            { amount: 2, item: ('croptopia:avocado'), probability: 0.02 },
            { amount: 2, item: ('croptopia:banana'), probability: 0.02 },
            { amount: 2, item: ('croptopia:cashew'), probability: 0.02 },
            { amount: 2, item: ('croptopia:cherry'), probability: 0.02 },
            { amount: 2, item: ('croptopia:coconut'), probability: 0.02 },
            { amount: 2, item: ('croptopia:date'), probability: 0.02 },
            { amount: 2, item: ('croptopia:dragonfruit'), probability: 0.02 },
            { amount: 2, item: ('croptopia:fig'), probability: 0.02 },
            { amount: 2, item: ('croptopia:grapefruit'), probability: 0.02 },
            { amount: 2, item: ('croptopia:kumquat'), probability: 0.02 },
            { amount: 2, item: ('croptopia:lemon'), probability: 0.02 },
            { amount: 2, item: ('croptopia:lime'), probability: 0.02 },
            { amount: 2, item: ('croptopia:mango'), probability: 0.02 },
            { amount: 2, item: ('croptopia:nectarine'), probability: 0.02 },
            { amount: 2, item: ('croptopia:nutmeg'), probability: 0.02 },
            { amount: 2, item: ('croptopia:orange'), probability: 0.02 },
            { amount: 2, item: ('croptopia:peach'), probability: 0.02 },
            { amount: 2, item: ('croptopia:pear'), probability: 0.02 },
            { amount: 2, item: ('croptopia:pecan'), probability: 0.02 },
            { amount: 2, item: ('croptopia:persimmon'), probability: 0.02 },
            { amount: 2, item: ('croptopia:plum'), probability: 0.02 },
            { amount: 2, item: ('croptopia:starfruit'), probability: 0.02 },
            { amount: 2, item: ('croptopia:walnut'), probability: 0.02 }
    
            ],
            [
                { amount: 3000, fluid: ('minecraft:water')}
            ]
    );

    // -- bonemeal and water to vanilla crops
    growthChamber(
        ('aof6:modern_industrialization/a_minecraft_crops'),
        12,
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
            { amount: 1, item: ('minecraft:twisting_vines'), probability: 0.02 },
            { amount: 1, item: ('minecraft:warped_fungus'), probability: 0.02 },
            { amount: 1, item: ('minecraft:crimson_fungus'), probability: 0.02 }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/oak_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/spruce_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/birch_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/jungle_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/acacia_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/dark_oak_sapling'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/mangrove_propagule'),
        12,
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

    growthChamber(
        ('aof6:modern_industrialization/twisted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('architects_palette:twisted_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('architects_palette:twisted_log') },
            { amount: 1, item: ('architects_palette:twisted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('architects_palette:twisted_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/palm_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('beachparty:palm_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('beachparty:palm_log') },
            { amount: 1, item: ('beachparty:palm_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('beachparty:palm_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/juniper_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:juniper_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:juniper_log') },
            { amount: 1, item: ('bewitchment:juniper_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('bewitchment:juniper_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:cypress_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:cypress_log') },
            { amount: 1, item: ('bewitchment:cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('bewitchment:cypress_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/elder_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:elder_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:elder_log') },
            { amount: 1, item: ('bewitchment:elder_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('bewitchment:elder_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/dragons_blood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:dragons_blood_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:dragons_blood_log') },
            { amount: 1, item: ('bewitchment:dragons_blood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('bewitchment:dragons_blood_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/blighted_balsa_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:blighted_balsa_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:blighted_balsa_log') },
            { amount: 1, item: ('biomemakeover:blighted_balsa_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('biomemakeover:blighted_balsa_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/willow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:willow_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:willow_log') },
            { amount: 1, item: ('biomemakeover:willow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('biomemakeover:willow_leaves'), probability: 0.2 },
            { amount: 1, item: ('biomemakeover:willowing_branches'), probability: 0.1}
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/swamp_cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:swamp_cypress_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:swamp_cypress_log') },
            { amount: 1, item: ('biomemakeover:swamp_cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('biomemakeover:swamp_cypress_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/ancient_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:ancient_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:ancient_oak_log') },
            { amount: 1, item: ('biomemakeover:ancient_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('biomemakeover:ancient_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/white_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('blockus:white_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('blockus:white_oak_log') },
            { amount: 1, item: ('blockus:white_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('blockus:white_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/legacy_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('blockus:legacy_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('blockus:legacy_log') },
            { amount: 1, item: ('blockus:legacy_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('blockus:legacy_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/yew_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bwplus:yew_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bwplus:yew_log') },
            { amount: 1, item: ('bwplus:yew_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('bwplus:yew_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/aspen_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:aspen_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:aspen_log') },
            { amount: 1, item: ('byg:aspen_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:aspen_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/baobab_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:baobab_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:baobab_log') },
            { amount: 1, item: ('byg:baobab_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:baobab_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/blue_enchanted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:blue_enchanted_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:blue_enchanted_log') },
            { amount: 1, item: ('byg:blue_enchanted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:blue_enchanted_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/purple_bulbis_oddity'),
        12,
        300,
        [
            { amount: 1, item: ('byg:purple_bulbis_oddity'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:bulbis_stem') },
            { amount: 1, item: ('byg:purple_bulbis_oddity'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:purple_bulbis_shell'), probability: 0.2 },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/bulbis_oddity'),
        12,
        300,
        [
            { amount: 1, item: ('byg:bulbis_oddity'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:bulbis_stem') },
            { amount: 1, item: ('byg:bulbis_oddity'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:bulbis_shell'), probability: 0.2 },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/pink_cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:pink_cherry_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cherry_log') },
            { amount: 1, item: ('byg:pink_cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:pink_cherry_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/white_cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:white_cherry_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cherry_log') },
            { amount: 1, item: ('byg:white_cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:white_cherry_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cika_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:cika_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cika_log') },
            { amount: 1, item: ('byg:cika_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:cika_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:cypress_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cypress_log') },
            { amount: 1, item: ('byg:cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:cypress_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/ebony_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:ebony_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:ebony_log') },
            { amount: 1, item: ('byg:ebony_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:ebony_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/ether_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:ether_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:ether_log') },
            { amount: 1, item: ('byg:ether_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:ether_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/fir_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:fir_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:fir_log') },
            { amount: 1, item: ('byg:fir_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:fir_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/green_enchanted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:green_enchanted_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:green_enchanted_log') },
            { amount: 1, item: ('byg:green_enchanted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:green_enchanted_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/holly_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:holly_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:holly_log') },
            { amount: 1, item: ('byg:holly_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:holly_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/fungal_imparius'),
        12,
        300,
        [
            { amount: 1, item: ('byg:fungal_imparius'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:fungal_imparius_stem') },
            { amount: 1, item: ('byg:fungal_imparius'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:fungal_imparius_block'), probability: 0.2 },
            { amount: 1, item: ('byg:fungal_imparius_filament_block'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/imparius_mushroom'),
        12,
        300,
        [
            { amount: 1, item: ('byg:imparius_mushroom'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:imparius_stem') },
            { amount: 1, item: ('byg:imparius_mushroom'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:imparius_mushroom_block'), probability: 0.2 },
            { amount: 1, item: ('byg:imparius_mushroom_branch'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/lament_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:lament_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:lament_log') },
            { amount: 1, item: ('byg:lament_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:lament_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/indigo_jacaranda_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:indigo_jacaranda_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:jacaranda_log') },
            { amount: 1, item: ('byg:indigo_jacaranda_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:indigo_jacaranda_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/jacaranda_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:jacaranda_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:jacaranda_log') },
            { amount: 1, item: ('byg:jacaranda_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:jacaranda_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/jacaranda_bush'),
        12,
        300,
        [
            { amount: 1, item: ('byg:jacaranda_bush'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:flowering_jacaranda_bush') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/indigo_jacaranda_bush'),
        12,
        300,
        [
            { amount: 1, item: ('byg:indigo_jacaranda_bush'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:flowering_indigo_jacaranda_bush') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/mahogany_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:mahogany_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:mahogany_log') },
            { amount: 1, item: ('byg:mahogany_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:mahogany_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/white_mangrove_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:white_mangrove_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:white_mangrove_log') },
            { amount: 1, item: ('byg:white_mangrove_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:white_mangrove_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_maple_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:red_maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:red_maple_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/silver_maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:silver_maple_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:silver_maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:silver_maple_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:maple_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:maple_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/mightshade_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:nightshade_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:nightshade_log') },
            { amount: 1, item: ('byg:imbued_nightshade_log') },
            { amount: 1, item: ('byg:nightshade_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:nightshade_leaves'), probability: 0.2 },
            { amount: 1, item: ('byg:flowering_nightshade_leaves'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/palm_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:palm_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:palm_log') },
            { amount: 1, item: ('byg:palm_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:palm_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/palo_verde_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:palo_verde_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:palo_verde_log') },
            { amount: 1, item: ('byg:palo_verde_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:palo_verde_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/pine_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:pine_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:pine_log') },
            { amount: 1, item: ('byg:pine_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:pine_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/rainbow_eucalyptus_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:rainbow_eucalyptus_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:rainbow_eucalyptus_log') },
            { amount: 1, item: ('byg:rainbow_eucalyptus_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:rainbow_eucalyptus_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/redwood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:redwood_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:redwood_log') },
            { amount: 1, item: ('byg:redwood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:redwood_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/skyris_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:skyris_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:skyris_log') },
            { amount: 1, item: ('byg:skyris_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:skyris_leaves'), probability: 0.2 },
            { amount: 1, item: ('byg:green_apple'), probability: 0.2 },
            { amount: 1, item: ('byg:skyris_vine'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/willow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:willow_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:willow_log') },
            { amount: 1, item: ('byg:willow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:willow_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/witch_hazel_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:witch_hazel_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:witch_hazel_log') },
            { amount: 1, item: ('byg:witch_hazel_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:witch_hazel_leaves'), probability: 0.2 },
            { amount: 1, item: ('byg:witch_hazel_branch'), probability: 0.1 },
            { amount: 1, item: ('byg:witch_hazel_blossom'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/zelkova_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:zelkova_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:zelkova_log') },
            { amount: 1, item: ('byg:zelkova_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:zelkova_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/sythian_fungus'),
        12,
        300,
        [
            { amount: 1, item: ('byg:sythian_fungus'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:sythian_stem') },
            { amount: 1, item: ('byg:sythian_fungus'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:sythian_wart_block'), probability: 0.2 },
            { amount: 1, item: ('minecraft:shroomlight'), probability: 0.1 },
            { amount: 1, item: ('byg:hanging_sythian_roots'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/embur_wart'),
        12,
        300,
        [
            { amount: 1, item: ('byg:embur_wart'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:embur_pedu') },
            { amount: 1, item: ('byg:embur_wart'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:embur_gel_block'), probability: 0.2 },
            { amount: 1, item: ('byg:pollen_block'), probability: 0.2 },
            { amount: 1, item: ('byg:embur_gel_branch'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/withering_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:withering_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:withering_oak_log') },
            { amount: 1, item: ('byg:withering_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:withering_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/araucaria_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:araucaria_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:pine_log') },
            { amount: 1, item: ('byg:araucaria_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:araucaria_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/blue_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:blue_spruce_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:blue_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:blue_spruce_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/brown_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_birch_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:brown_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:brown_birch_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/brown_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:brown_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:brown_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/brown_zelkova_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_zelkova_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:zelkova_log') },
            { amount: 1, item: ('byg:brown_zelkova_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:brown_zelkova_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/joshua_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:joshua_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:joshua_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:joshua_leaves'), probability: 0.2 },
            { amount: 1, item: ('byg:ripe_joshua_leaves'), probability: 0.05 },
            { amount: 1, item: ('byg:flowering_joshua_leaves'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orange_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_birch_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:orange_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:orange_birch_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orange_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:orange_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:orange_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orange_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_spruce_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:orange_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:orange_spruce_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orchard_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orchard_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:orchard_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:orchard_leaves'), probability: 0.2 },
            { amount: 2, item: ('minecraft:apple'), probability: 0.2 },
            { amount: 1, item: ('byg:ripe_orchard_leaves'), probability: 0.05 },
            { amount: 1, item: ('byg:flowering_orchard_leaves'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_birch_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:red_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:red_birch_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:red_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:red_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_spruce_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:red_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:red_spruce_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/yellow_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:yellow_birch_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:yellow_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:yellow_birch_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/yellow_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:yellow_spruce_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:yellow_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:yellow_spruce_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/soul_shroom'),
        12,
        300,
        [
            { amount: 1, item: ('byg:soul_shroom'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:soul_shroom_stem') },
            { amount: 1, item: ('byg:soul_shroom'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:soul_shroom_block'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/shulkren_fungus'),
        12,
        300,
        [
            { amount: 1, item: ('byg:shulkren_fungus'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:white_mushroom_stem') },
            { amount: 1, item: ('byg:shulkren_fungus'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:shulkren_wart_block'), probability: 0.2 },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.05 },
            { amount: 1, item: ('byg:shulkren_vine'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/death_cap'),
        12,
        300,
        [
            { amount: 1, item: ('byg:death_cap'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:mushroom_stem') },
            { amount: 1, item: ('byg:death_cap'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:death_cap_mushroom_block'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orange_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:orange_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:tecal_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:orange_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:orange_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:orange_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:orange_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:red_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:roze_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:red_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:red_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:red_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:red_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/blue_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:blue_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:azule_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:blue_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:blue_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:blue_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:blue_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/yellow_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:yellow_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:fiss_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:yellow_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:yellow_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:yellow_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:yellow_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/pink_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:pink_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:bright_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:pink_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:pink_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:pink_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:pink_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/purple_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:purple_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:walnut_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:purple_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:purple_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:purple_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:purple_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/white_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:white_azalea_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:titanium_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:white_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('minecraft:azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:white_blooming_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:white_flowering_azalea_leaves'), probability: 0.2 },
            { amount: 1, item: ('colorful-azaleas:white_drooping_azalea_leaves'), probability: 0.2 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cinnamon_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('croptopia:cinnamon_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('croptopia:cinnamon_log') },
            { amount: 1, item: ('croptopia:cinnamon_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('croptopia:cinnamon'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('vinery:cherry_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('vinery:cherry_log') },
            { amount: 1, item: ('vinery:cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('vinery:cherry_leaves'), probability: 0.2 },
            { amount: 1, item: ('vinery:cherry'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/apple_tree_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('vinery:apple_tree_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('vinery:apple_log') },
            { amount: 1, item: ('vinery:apple_tree_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('vinery:apple_leaves'), probability: 0.2 },
            { amount: 1, item: ('minecraft:apple'), probability: 0.2 },
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/walnut_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('ecologics:walnut_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('ecologics:walnut_log') },
            { amount: 1, item: ('ecologics:walnut_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('ecologics:walnut_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/rubber_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('techreborn:rubber_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('techreborn:rubber_log') },
            { amount: 1, item: ('techreborn:rubber_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('techreborn:rubber_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/orange_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:orange_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:orange_log') },
            { amount: 1, item: ('spectrum:orange_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:orange_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/magenta_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:magenta_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:magenta_log') },
            { amount: 1, item: ('spectrum:magenta_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:magenta_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/light_blue_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:light_blue_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:light_blue_log') },
            { amount: 1, item: ('spectrum:light_blue_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:light_blue_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/yellow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:yellow_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:yellow_log') },
            { amount: 1, item: ('spectrum:yellow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:yellow_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/lime_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:lime_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:lime_log') },
            { amount: 1, item: ('spectrum:lime_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:lime_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/pink_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:pink_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:pink_log') },
            { amount: 1, item: ('spectrum:pink_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:pink_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/cyan_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:cyan_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:cyan_log') },
            { amount: 1, item: ('spectrum:cyan_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:cyan_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/purple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:purple_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:purple_log') },
            { amount: 1, item: ('spectrum:purple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:purple_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/blue_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:blue_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:blue_log') },
            { amount: 1, item: ('spectrum:blue_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:blue_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/brown_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:brown_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:brown_log') },
            { amount: 1, item: ('spectrum:brown_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:brown_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/green_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:green_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:green_log') },
            { amount: 1, item: ('spectrum:green_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:green_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/red_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:red_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:red_log') },
            { amount: 1, item: ('spectrum:red_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:red_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/black_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:black_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:black_log') },
            { amount: 1, item: ('spectrum:black_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:black_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/white_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:white_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:white_log') },
            { amount: 1, item: ('spectrum:white_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('spectrum:white_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/twilight_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:twilight_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:twilight_oak_log') },
            { amount: 1, item: ('twilightforest:twilight_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:twilight_oak_leaves'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/canopy_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:canopy_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:canopy_log') },
            { amount: 1, item: ('twilightforest:canopy_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:canopy_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/mangrove_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:mangrove_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:mangrove_log') },
            { amount: 2, item: ('twilightforest:mangrove_root') },
            { amount: 1, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:mangrove_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:mangrove_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.05 },
            { amount: 1, item: ('minecraft:vine'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/darkwood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:darkwood_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:dark_log') },
            { amount: 1, item: ('twilightforest:darkwood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:dark_leaves'), probability: 0.2 }
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/hollow_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:hollow_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 5, item: ('twilightforest:twilight_oak_log') },
            { amount: 1, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:hollow_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:twilight_oak_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.05 },
            { amount: 1, item: ('twilightforest:cicada'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/time_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:time_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:time_wood') },
            { amount: 1, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:time_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:canopy_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:time_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/transformation_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:transformation_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:transformation_log') },
            { amount: 1, item: ('twilightforest:transformation_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:transformation_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:transformation_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/mining_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:mining_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:mining_log') },
            { amount: 1, item: ('twilightforest:mining_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:mining_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:mining_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/sorting_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:sorting_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:sorting_log') },
            { amount: 1, item: ('twilightforest:sorting_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:sorting_leaves'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:sorting_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/rainbow_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:rainbow_oak_sapling'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:twilight_oak_log') },
            { amount: 1, item: ('twilightforest:rainbow_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('twilightforest:rainbow_oak_leaves'), probability: 0.2 },
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('minecraft:oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:spruce_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('minecraft:spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:spruce_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:birch_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('minecraft:birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:birch_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_jungle_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:jungle_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:jungle_log') },
            { amount: 1, item: ('minecraft:jungle_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:jungle_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_acacia_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:acacia_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:acacia_log') },
            { amount: 1, item: ('minecraft:acacia_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:acacia_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_dark_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:dark_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:dark_oak_log') },
            { amount: 1, item: ('minecraft:dark_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:dark_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_mangrove_propagule'),
        12,
        300,
        [
            { amount: 1, item: ('minecraft:mangrove_propagule'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:mangrove_log') },
            { amount: 1, item: ('minecraft:mangrove_propagule'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:mangrove_leaves') },
            { amount: 1, item: ('minecraft:mangrove_roots'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_twisted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('architects_palette:twisted_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('architects_palette:twisted_log') },
            { amount: 1, item: ('architects_palette:twisted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('architects_palette:twisted_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_palm_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('beachparty:palm_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('beachparty:palm_log') },
            { amount: 1, item: ('beachparty:palm_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('beachparty:palm_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_juniper_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:juniper_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:juniper_log') },
            { amount: 1, item: ('bewitchment:juniper_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('bewitchment:juniper_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:cypress_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:cypress_log') },
            { amount: 1, item: ('bewitchment:cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('bewitchment:cypress_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_elder_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:elder_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:elder_log') },
            { amount: 1, item: ('bewitchment:elder_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('bewitchment:elder_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_dragons_blood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bewitchment:dragons_blood_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bewitchment:dragons_blood_log') },
            { amount: 1, item: ('bewitchment:dragons_blood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('bewitchment:dragons_blood_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_blighted_balsa_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:blighted_balsa_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:blighted_balsa_log') },
            { amount: 1, item: ('biomemakeover:blighted_balsa_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('biomemakeover:blighted_balsa_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_willow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:willow_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:willow_log') },
            { amount: 1, item: ('biomemakeover:willow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('biomemakeover:willow_leaves') },
            { amount: 1, item: ('biomemakeover:willowing_branches'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_swamp_cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:swamp_cypress_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:swamp_cypress_log') },
            { amount: 1, item: ('biomemakeover:swamp_cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('biomemakeover:swamp_cypress_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_ancient_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('biomemakeover:ancient_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('biomemakeover:ancient_oak_log') },
            { amount: 1, item: ('biomemakeover:ancient_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('biomemakeover:ancient_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_white_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('blockus:white_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('blockus:white_oak_log') },
            { amount: 1, item: ('blockus:white_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('blockus:white_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_legacy_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('blockus:legacy_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('blockus:legacy_log') },
            { amount: 1, item: ('blockus:legacy_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('blockus:legacy_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_yew_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('bwplus:yew_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('bwplus:yew_log') },
            { amount: 1, item: ('bwplus:yew_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('bwplus:yew_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_aspen_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:aspen_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:aspen_log') },
            { amount: 1, item: ('byg:aspen_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:aspen_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_baobab_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:baobab_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:baobab_log') },
            { amount: 1, item: ('byg:baobab_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:baobab_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_blue_enchanted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:blue_enchanted_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:blue_enchanted_log') },
            { amount: 1, item: ('byg:blue_enchanted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:blue_enchanted_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_purple_bulbis_oddity'),
        12,
        300,
        [
            { amount: 1, item: ('byg:purple_bulbis_oddity'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:bulbis_stem') },
            { amount: 1, item: ('byg:purple_bulbis_oddity'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:purple_bulbis_shell') },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_bulbis_oddity'),
        12,
        300,
        [
            { amount: 1, item: ('byg:bulbis_oddity'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:bulbis_stem') },
            { amount: 1, item: ('byg:bulbis_oddity'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 20, item: ('byg:bulbis_shell') },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_pink_cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:pink_cherry_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cherry_log') },
            { amount: 1, item: ('byg:pink_cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:pink_cherry_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_white_cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:white_cherry_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cherry_log') },
            { amount: 1, item: ('byg:white_cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:white_cherry_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_cika_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:cika_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cika_log') },
            { amount: 1, item: ('byg:cika_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:cika_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_cypress_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:cypress_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:cypress_log') },
            { amount: 1, item: ('byg:cypress_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:cypress_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_ebony_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:ebony_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:ebony_log') },
            { amount: 1, item: ('byg:ebony_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:ebony_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_ether_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:ether_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:ether_log') },
            { amount: 1, item: ('byg:ether_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:ether_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_fir_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:fir_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:fir_log') },
            { amount: 1, item: ('byg:fir_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:fir_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_green_enchanted_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:green_enchanted_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:green_enchanted_log') },
            { amount: 1, item: ('byg:green_enchanted_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:green_enchanted_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_holly_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:holly_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:holly_log') },
            { amount: 1, item: ('byg:holly_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:holly_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_fungal_imparius'),
        12,
        300,
        [
            { amount: 1, item: ('byg:fungal_imparius'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:fungal_imparius_stem') },
            { amount: 1, item: ('byg:fungal_imparius'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:fungal_imparius_block') },
            { amount: 10, item: ('byg:fungal_imparius_filament_block') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_imparius_mushroom'),
        12,
        300,
        [
            { amount: 1, item: ('byg:imparius_mushroom'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:imparius_stem') },
            { amount: 1, item: ('byg:imparius_mushroom'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:imparius_mushroom_block') },
            { amount: 1, item: ('byg:imparius_mushroom_branch'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_lament_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:lament_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:lament_log') },
            { amount: 1, item: ('byg:lament_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:lament_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_indigo_jacaranda_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:indigo_jacaranda_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:jacaranda_log') },
            { amount: 1, item: ('byg:indigo_jacaranda_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:indigo_jacaranda_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_jacaranda_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:jacaranda_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:jacaranda_log') },
            { amount: 1, item: ('byg:jacaranda_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:jacaranda_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_mahogany_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:mahogany_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:mahogany_log') },
            { amount: 1, item: ('byg:mahogany_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:mahogany_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_white_mangrove_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:white_mangrove_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:white_mangrove_log') },
            { amount: 1, item: ('byg:white_mangrove_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:white_mangrove_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_ed_maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_maple_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:red_maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:red_maple_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_silver_maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:silver_maple_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:silver_maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:silver_maple_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_maple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:maple_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:maple_log') },
            { amount: 1, item: ('byg:maple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:maple_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_mightshade_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:nightshade_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:nightshade_log') },
            { amount: 1, item: ('byg:imbued_nightshade_log') },
            { amount: 1, item: ('byg:nightshade_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:nightshade_leaves') },
            { amount: 5, item: ('byg:flowering_nightshade_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_palm_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:palm_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:palm_log') },
            { amount: 1, item: ('byg:palm_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:palm_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_palo_verde_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:palo_verde_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:palo_verde_log') },
            { amount: 1, item: ('byg:palo_verde_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:palo_verde_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_pine_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:pine_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:pine_log') },
            { amount: 1, item: ('byg:pine_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:pine_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_rainbow_eucalyptus_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:rainbow_eucalyptus_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:rainbow_eucalyptus_log') },
            { amount: 1, item: ('byg:rainbow_eucalyptus_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:rainbow_eucalyptus_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_redwood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:redwood_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:redwood_log') },
            { amount: 1, item: ('byg:redwood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:redwood_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_skyris_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:skyris_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:skyris_log') },
            { amount: 1, item: ('byg:skyris_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:skyris_leaves') },
            { amount: 1, item: ('byg:green_apple'), probability: 0.2 },
            { amount: 1, item: ('byg:skyris_vine'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_willow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:willow_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:willow_log') },
            { amount: 1, item: ('byg:willow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:willow_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_witch_hazel_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:witch_hazel_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:witch_hazel_log') },
            { amount: 1, item: ('byg:witch_hazel_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:witch_hazel_leaves') },
            { amount: 1, item: ('byg:witch_hazel_branch'), probability: 0.2 },
            { amount: 1, item: ('byg:witch_hazel_blossom'), probability: 0.2 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_zelkova_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:zelkova_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:zelkova_log') },
            { amount: 1, item: ('byg:zelkova_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:zelkova_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_sythian_fungus'),
        12,
        300,
        [
            { amount: 1, item: ('byg:sythian_fungus'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:sythian_stem') },
            { amount: 1, item: ('byg:sythian_fungus'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 5, item: ('byg:sythian_wart_block') },
            { amount: 1, item: ('minecraft:shroomlight'), probability: 0.2 },
            { amount: 1, item: ('byg:hanging_sythian_roots'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_embur_wart'),
        12,
        300,
        [
            { amount: 1, item: ('byg:embur_wart'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:embur_pedu') },
            { amount: 1, item: ('byg:embur_wart'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:embur_gel_block') },
            { amount: 5, item: ('byg:pollen_block'), probability: 0.5 },
            { amount: 1, item: ('byg:embur_gel_branch'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_withering_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:withering_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:withering_oak_log') },
            { amount: 1, item: ('byg:withering_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:withering_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_araucaria_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:araucaria_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:pine_log') },
            { amount: 1, item: ('byg:araucaria_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:araucaria_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_blue_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:blue_spruce_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:blue_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:blue_spruce_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_brown_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_birch_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:brown_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:brown_birch_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_brown_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:brown_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:brown_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_brown_zelkova_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:brown_zelkova_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:zelkova_log') },
            { amount: 1, item: ('byg:brown_zelkova_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:brown_zelkova_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_joshua_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:joshua_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:joshua_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:joshua_leaves') },
            { amount: 1, item: ('byg:ripe_joshua_leaves'), probability: 0.7 },
            { amount: 1, item: ('byg:flowering_joshua_leaves'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orange_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_birch_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:orange_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:orange_birch_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orange_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:orange_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:orange_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orange_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orange_spruce_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:orange_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:orange_spruce_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orchard_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:orchard_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:orchard_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:orchard_leaves') },
            { amount: 2, item: ('minecraft:apple'), probability: 0.2 },
            { amount: 1, item: ('byg:ripe_orchard_leaves'), probability: 0.1 },
            { amount: 1, item: ('byg:flowering_orchard_leaves'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_red_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_birch_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:red_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:red_birch_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_red_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:oak_log') },
            { amount: 1, item: ('byg:red_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:red_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_red_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:red_spruce_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:red_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:red_spruce_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_yellow_birch_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:yellow_birch_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:birch_log') },
            { amount: 1, item: ('byg:yellow_birch_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:yellow_birch_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_yellow_spruce_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('byg:yellow_spruce_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:spruce_log') },
            { amount: 1, item: ('byg:yellow_spruce_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:yellow_spruce_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_soul_shroom'),
        12,
        300,
        [
            { amount: 1, item: ('byg:soul_shroom'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:soul_shroom_stem') },
            { amount: 1, item: ('byg:soul_shroom'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('byg:soul_shroom_block') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_shulkren_fungus'),
        12,
        300,
        [
            { amount: 1, item: ('byg:shulkren_fungus'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('byg:white_mushroom_stem') },
            { amount: 1, item: ('byg:shulkren_fungus'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 1, item: ('byg:shulkren_wart_block'), probability: 0.5 },
            { amount: 1, item: ('byg:purple_shroomlight'), probability: 0.2 },
            { amount: 1, item: ('byg:shulkren_vine'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_death_cap'),
        12,
        300,
        [
            { amount: 1, item: ('byg:death_cap'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('minecraft:mushroom_stem') },
            { amount: 1, item: ('byg:death_cap'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 5, item: ('byg:death_cap_mushroom_block') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orange_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:orange_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:tecal_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:orange_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:orange_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:orange_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:orange_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_red_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:red_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:roze_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:red_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:red_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:red_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:red_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_blue_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:blue_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:azule_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:blue_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:blue_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:blue_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:blue_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_yellow_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:yellow_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:fiss_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:yellow_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:yellow_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:yellow_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:yellow_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_pink_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:pink_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:bright_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:pink_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:pink_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:pink_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:pink_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_purple_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:purple_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:walnut_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:purple_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:purple_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:purple_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:purple_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_white_azalea_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('colorful-azaleas:white_azalea_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('colorful-azaleas:titanium_azalea_wood') },
            { amount: 1, item: ('colorful-azaleas:white_azalea_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('minecraft:azalea_leaves') },
            { amount: 1, item: ('colorful-azaleas:white_blooming_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:white_flowering_azalea_leaves'), probability: 0.5 },
            { amount: 1, item: ('colorful-azaleas:white_drooping_azalea_leaves'), probability: 0.5 },

    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_cherry_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('vinery:cherry_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('vinery:cherry_log') },
            { amount: 1, item: ('vinery:cherry_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('vinery:cherry_leaves') },
            { amount: 1, item: ('vinery:cherry'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_apple_tree_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('vinery:apple_tree_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('vinery:apple_log') },
            { amount: 1, item: ('vinery:apple_tree_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('vinery:apple_leaves') },
            { amount: 1, item: ('minecraft:apple'), probability: 0.2 },
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_walnut_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('ecologics:walnut_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('ecologics:walnut_log') },
            { amount: 1, item: ('ecologics:walnut_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('ecologics:walnut_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_rubber_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('techreborn:rubber_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('techreborn:rubber_log') },
            { amount: 1, item: ('techreborn:rubber_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('techreborn:rubber_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_orange_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:orange_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:orange_log') },
            { amount: 1, item: ('spectrum:orange_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:orange_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_magenta_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:magenta_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:magenta_log') },
            { amount: 1, item: ('spectrum:magenta_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:magenta_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_light_blue_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:light_blue_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:light_blue_log') },
            { amount: 1, item: ('spectrum:light_blue_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:light_blue_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_yellow_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:yellow_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:yellow_log') },
            { amount: 1, item: ('spectrum:yellow_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:yellow_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_lime_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:lime_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:lime_log') },
            { amount: 1, item: ('spectrum:lime_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:lime_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_pink_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:pink_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:pink_log') },
            { amount: 1, item: ('spectrum:pink_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:pink_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_cyan_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:cyan_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:cyan_log') },
            { amount: 1, item: ('spectrum:cyan_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:cyan_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_purple_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:purple_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:purple_log') },
            { amount: 1, item: ('spectrum:purple_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:purple_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_blue_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:blue_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:blue_log') },
            { amount: 1, item: ('spectrum:blue_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:blue_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_brown_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:brown_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:brown_log') },
            { amount: 1, item: ('spectrum:brown_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:brown_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_green_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:green_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:green_log') },
            { amount: 1, item: ('spectrum:green_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:green_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_red_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:red_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:red_log') },
            { amount: 1, item: ('spectrum:red_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:red_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_black_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:black_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:black_log') },
            { amount: 1, item: ('spectrum:black_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:black_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_white_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('spectrum:white_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('spectrum:white_log') },
            { amount: 1, item: ('spectrum:white_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('spectrum:white_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_twilight_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:twilight_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:twilight_oak_log') },
            { amount: 1, item: ('twilightforest:twilight_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:twilight_oak_leaves') }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_canopy_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:canopy_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:canopy_log') },
            { amount: 1, item: ('twilightforest:canopy_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:canopy_leaves') },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_mangrove_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:mangrove_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:mangrove_log') },
            { amount: 2, item: ('twilightforest:mangrove_root') },
            { amount: 1, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:mangrove_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:mangrove_leaves') },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.5 },
            { amount: 1, item: ('minecraft:vine'), probability: 0.1 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_darkwood_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:darkwood_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:dark_log') },
            { amount: 1, item: ('twilightforest:darkwood_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:dark_leaves') }
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_hollow_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:hollow_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 5, item: ('twilightforest:twilight_oak_log') },
            { amount: 2, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:hollow_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:twilight_oak_leaves') },
            { amount: 1, item: ('twilightforest:firefly'), probability: 0.5 },
            { amount: 1, item: ('twilightforest:cicada'), probability: 0.5 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_time_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:time_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:time_wood') },
            { amount: 1, item: ('twilightforest:root') },
            { amount: 1, item: ('twilightforest:time_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:canopy_leaves') },
            { amount: 1, item: ('twilightforest:time_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_transformation_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:transformation_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:transformation_log') },
            { amount: 1, item: ('twilightforest:transformation_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:transformation_leaves') },
            { amount: 1, item: ('twilightforest:transformation_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_mining_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:mining_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:mining_log') },
            { amount: 1, item: ('twilightforest:mining_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:mining_leaves') },
            { amount: 1, item: ('twilightforest:mining_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_sorting_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:sorting_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:sorting_log') },
            { amount: 1, item: ('twilightforest:sorting_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:sorting_leaves') },
            { amount: 1, item: ('twilightforest:sorting_log_core'), probability: 0.05 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/z_rainbow_oak_sapling'),
        12,
        300,
        [
            { amount: 1, item: ('twilightforest:rainbow_oak_sapling'), probability: 0 },
            { amount: 1, item: ('mysticalagriculture:awakened_supremium_shears'), probability: 0 }
        ],
        [
            { amount: 2, item: ('twilightforest:twilight_oak_log') },
            { amount: 1, item: ('twilightforest:rainbow_oak_sapling'), probability: 0.2 },
            { amount: 1, item: ('minecraft:stick'), probability: 0.2 },
            { amount: 10, item: ('twilightforest:rainbow_oak_leaves') },
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );
});
