ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let growthChamber = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let r = {
            type: mi('growth_chamber'),
            eu: eu,
            duration: duration
        }
    
        if (item_inputs) r.item_inputs = item_inputs;
        if (item_outputs) r.item_outputs = item_outputs;
        if (fluid_inputs) r.fluid_inputs = fluid_inputs;
    
        e.custom(r).id(id)
    }

    growthChamber(
        ('aof6:modern_industrialization/a_artichoke'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:artichoke_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:artichoke') },
            { amount: 1, item: ('croptopia:artichoke_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_asparagus'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:asparagus_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:asparagus') },
            { amount: 1, item: ('croptopia:asparagus_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_barley'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:barley_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:barley') },
            { amount: 1, item: ('croptopia:barley_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_basil'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:basil_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:basil') },
            { amount: 1, item: ('croptopia:basil_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_bellpepper'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:bellpepper_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:bellpepper') },
            { amount: 1, item: ('croptopia:bellpepper_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_blackbean'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:blackbean_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:blackbean') },
            { amount: 1, item: ('croptopia:blackbean_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_blackberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:blackberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:blackberry') },
            { amount: 1, item: ('croptopia:blackberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_blueberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:blueberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:blueberry') },
            { amount: 1, item: ('croptopia:blueberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_broccoli'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:broccoli_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:broccoli') },
            { amount: 1, item: ('croptopia:broccoli_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_cantaloupe'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:cantaloupe_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cantaloupe') },
            { amount: 1, item: ('croptopia:cantaloupe_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_cauliflower'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:cauliflower_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cauliflower') },
            { amount: 1, item: ('croptopia:cauliflower_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_celery'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:celery_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:celery') },
            { amount: 1, item: ('croptopia:celery_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_chile_pepper'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:chile_pepper_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:chile_pepper') },
            { amount: 1, item: ('croptopia:chile_pepper_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_coffee_beans'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:coffee_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:coffee_beans') },
            { amount: 1, item: ('croptopia:coffee_beans_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_corn'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:corn_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:corn') },
            { amount: 1, item: ('croptopia:corn_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_cranberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:cranberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cranberry') },
            { amount: 1, item: ('croptopia:cranberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_cucumber'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:cucumber_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cucumber') },
            { amount: 1, item: ('croptopia:cucumber_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_currant'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:currant_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:currant') },
            { amount: 1, item: ('croptopia:currant_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_eggplant'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:eggplant_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:eggplant') },
            { amount: 1, item: ('croptopia:eggplant_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_elderberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:elderberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:elderberry') },
            { amount: 1, item: ('croptopia:elderberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_ginger'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:ginger_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:ginger') },
            { amount: 1, item: ('croptopia:ginger_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_grape'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:grape_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:grape') },
            { amount: 1, item: ('croptopia:grape_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_greenbean'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:greenbean_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:greenbean') },
            { amount: 1, item: ('croptopia:greenbean_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_greenonion'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:greenonion_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:greenonion') },
            { amount: 1, item: ('croptopia:greenonion_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_honeydew'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:honeydew_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:honeydew') },
            { amount: 1, item: ('croptopia:honeydew_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_hops'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:hops_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:hops') },
            { amount: 1, item: ('croptopia:hops_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_kale'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:kale_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:kale') },
            { amount: 1, item: ('croptopia:kale_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_kiwi'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:kiwi_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:kiwi') },
            { amount: 1, item: ('croptopia:kiwi_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_leek'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:leek_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:leek') },
            { amount: 1, item: ('croptopia:leek_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_lettuce'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:lettuce_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:lettuce') },
            { amount: 1, item: ('croptopia:lettuce_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_mustard'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:mustard_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:mustard') },
            { amount: 1, item: ('croptopia:mustard_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_oat'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:oat_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:oat') },
            { amount: 1, item: ('croptopia:oat_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_olive'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:olive_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:olive') },
            { amount: 1, item: ('croptopia:olive_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_peanut'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:peanut_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:peanut') },
            { amount: 1, item: ('croptopia:peanut_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_pepper'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:pepper_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:pepper') },
            { amount: 1, item: ('croptopia:pepper_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_pineapple'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:pineapple_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:pineapple') },
            { amount: 1, item: ('croptopia:pineapple_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_radish'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:radish_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:radish') },
            { amount: 1, item: ('croptopia:radish_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_raspberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:raspberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:raspberry') },
            { amount: 1, item: ('croptopia:raspberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_rhubarb'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:rhubarb_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:rhubarb') },
            { amount: 1, item: ('croptopia:rhubarb_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_rutabaga'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:rutabaga_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:rutabaga') },
            { amount: 1, item: ('croptopia:rutabaga_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_saguaro'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:saguaro_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:saguaro') },
            { amount: 1, item: ('croptopia:saguaro_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_soybean'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:soybean_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:soybean') },
            { amount: 1, item: ('croptopia:soybean_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_spinach'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:spinach_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:spinach') },
            { amount: 1, item: ('croptopia:spinach_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_squash'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:squash_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:squash') },
            { amount: 1, item: ('croptopia:squash_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_strawberry'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:strawberry_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:strawberry') },
            { amount: 1, item: ('croptopia:strawberry_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_sweetpotato'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:sweetpotato_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:sweetpotato') },
            { amount: 1, item: ('croptopia:sweetpotato_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_tea_leaves'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:tea_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:tea_leaves') },
            { amount: 1, item: ('croptopia:tea_leaves_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_tomatillo'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:tomatillo_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:tomatillo') },
            { amount: 1, item: ('croptopia:tomatillo_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_turmeric'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:turmeric_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:turmeric') },
            { amount: 1, item: ('croptopia:turmeric_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_turnip'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:turnip_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:turnip') },
            { amount: 1, item: ('croptopia:turnip_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_vanilla'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:vanilla_seeds'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:vanilla') },
            { amount: 1, item: ('croptopia:vanilla_seeds'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_yam'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:yam_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:yam') },
            { amount: 1, item: ('croptopia:yam_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_zucchini'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:zucchini_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:zucchini') },
            { amount: 1, item: ('croptopia:zucchini_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_cabbage'),
        15,
        400,
        [
            { amount: 1, item: ('farmersdelight:cabbage_seeds'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('farmersdelight:cabbage') },
            { amount: 1, item: ('farmersdelight:cabbage_seeds'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_tomato'),
        15,
        400,
        [
            { amount: 1, item: ('farmersdelight:tomato_seeds'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('farmersdelight:tomato') },
            { amount: 1, item: ('farmersdelight:rotton_tomato'), probability: 0.01 },
            { amount: 1, item: ('farmersdelight:tomato_seeds'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_onion'),
        15,
        400,
        [
            { amount: 1, item: ('croptopia:onion_seed'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('farmersdelight:onion') },
            { amount: 1, item: ('croptopia:onion_seed'), probability: 0.02 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/a_rice'),
        15,
        400,
        [
            { amount: 1, item: ('farmersdelight:rice_panicle'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_fertilizer'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('farmersdelight:rice') },
            { amount: 1, item: ('farmersdelight:rice_panicle'), probability: 0.04 }
    
        ],
        [
            { amount: 1000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_almond'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:almond_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:almond') },
            { amount: 1, item: ('croptopia:almond_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_apple'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:apple_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:apple') },
            { amount: 1, item: ('croptopia:apple_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_apricot'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:apricot_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:apricot') },
            { amount: 1, item: ('croptopia:apricot_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_avocado'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:avocado_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:avocado') },
            { amount: 1, item: ('croptopia:avocado_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_banana'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:banana_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:banana') },
            { amount: 1, item: ('croptopia:banana_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_cashew'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:cashew_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cashew') },
            { amount: 1, item: ('croptopia:cashew_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_cherry'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:cherry_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:cherry') },
            { amount: 1, item: ('croptopia:cherry_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_coconut'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:coconut_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:coconut') },
            { amount: 1, item: ('croptopia:coconut_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_date'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:date_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:date') },
            { amount: 1, item: ('croptopia:date_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_dragonfruit'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:dragonfruit_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:dragonfruit') },
            { amount: 1, item: ('croptopia:dragonfruit_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_fig'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:fig_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:fig') },
            { amount: 1, item: ('croptopia:fig_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_grapefruit'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:grapefruit_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:grapefruit') },
            { amount: 1, item: ('croptopia:grapefruit_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_kumquat'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:kumquat_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:kumquat') },
            { amount: 1, item: ('croptopia:kumquat_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_lemon'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:lemon_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:lemon') },
            { amount: 1, item: ('croptopia:lemon_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_lime'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:lime_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:lime') },
            { amount: 1, item: ('croptopia:lime_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_mango'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:mango_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:mango') },
            { amount: 1, item: ('croptopia:mango_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_nectarine'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:nectarine_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:nectarine') },
            { amount: 1, item: ('croptopia:nectarine_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_nutmeg'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:nutmeg_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:nutmeg') },
            { amount: 1, item: ('croptopia:nutmeg_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_orange'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:orange_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:orange') },
            { amount: 1, item: ('croptopia:orange_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_peach'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:peach_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:peach') },
            { amount: 1, item: ('croptopia:peach_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_pear'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:pear_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:pear') },
            { amount: 1, item: ('croptopia:pear_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_pecan'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:pecan_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:pecan') },
            { amount: 1, item: ('croptopia:pecan_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_plum'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:plum_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:plum') },
            { amount: 1, item: ('croptopia:plum_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_starfruit'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:starfruit_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:starfruit') },
            { amount: 1, item: ('croptopia:starfruit_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/b_walnut'),
        18,
        600,
        [
            { amount: 1, item: ('croptopia:walnut_sapling'), probability: 0 },
            { amount: 1, item: ('kubejs:croptopia_mulch'), probability: 0.01 }
        ],
        [
            { amount: 2, item: ('croptopia:walnut') },
            { amount: 1, item: ('croptopia:walnut_sapling'), probability: 0.02 }
    
        ],
        [
            { amount: 3000, fluid: ('minecraft:water')}
        ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_wheat'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:wheat_seeds') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:wheat') },
            { amount: 1, item: ('minecraft:wheat_seeds'), probability: 0.02 },
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_sugar_cane'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:sugar_cane') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:sugar_cane') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_carrot'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:carrot') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:carrot') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_potato'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:potato') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:potato') },
            { amount: 1, item: ('minecraft:poisonous_potato'), probability: 0.02 },
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_beetroot'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:beetroot_seeds') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:beetroot') },
            { amount: 1, item: ('minecraft:beetroot_seeds'), probability: 0.02 },
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_sweet_berries'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:sweet_berries') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:sweet_berries') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_cocoa_beans'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:cocoa_beans') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:cocoa_beans') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_pumpkin'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:pumpkin') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:pumpkin') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/c_melon'),
        2,
        600,
        [
            { amount: 1, item: ('minecraft:melon') },
            { amount: 1, item: ('minecraft:bone_meal') }
        ],
        [
            { amount: 2, item: ('minecraft:melon') }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );

    growthChamber(
        ('aof6:modern_industrialization/d_oak_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_spruce_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_birch_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_jungle_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_acacia_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_dark_oak_sapling'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_mangrove_propagule'),
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

    growthChamber(
        ('aof6:modern_industrialization/d_twisted_sapling'),
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
        ('aof6:modern_industrialization/d_palm_sapling'),
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
        ('aof6:modern_industrialization/d_juniper_sapling'),
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
        ('aof6:modern_industrialization/d_cypress_sapling'),
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
        ('aof6:modern_industrialization/d_elder_sapling'),
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
        ('aof6:modern_industrialization/d_dragons_blood_sapling'),
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
        ('aof6:modern_industrialization/d_blighted_balsa_sapling'),
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
        ('aof6:modern_industrialization/d_willow_sapling'),
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
        ('aof6:modern_industrialization/d_swamp_cypress_sapling'),
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
        ('aof6:modern_industrialization/d_ancient_oak_sapling'),
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
        ('aof6:modern_industrialization/d_white_oak_sapling'),
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
        ('aof6:modern_industrialization/d_legacy_sapling'),
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
        ('aof6:modern_industrialization/d_yew_sapling'),
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
        ('aof6:modern_industrialization/d_aspen_sapling'),
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
        ('aof6:modern_industrialization/d_baobab_sapling'),
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
        ('aof6:modern_industrialization/d_blue_enchanted_sapling'),
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
        ('aof6:modern_industrialization/d_purple_bulbis_oddity'),
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
        ('aof6:modern_industrialization/d_bulbis_oddity'),
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
        ('aof6:modern_industrialization/d_pink_cherry_sapling'),
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
        ('aof6:modern_industrialization/d_white_cherry_sapling'),
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
        ('aof6:modern_industrialization/d_cika_sapling'),
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
        ('aof6:modern_industrialization/d_cypress_sapling'),
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
        ('aof6:modern_industrialization/d_ebony_sapling'),
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
        ('aof6:modern_industrialization/d_ether_sapling'),
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
        ('aof6:modern_industrialization/d_fir_sapling'),
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
        ('aof6:modern_industrialization/d_green_enchanted_sapling'),
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
        ('aof6:modern_industrialization/d_holly_sapling'),
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
        ('aof6:modern_industrialization/d_fungal_imparius'),
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
        ('aof6:modern_industrialization/d_imparius_mushroom'),
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
        ('aof6:modern_industrialization/d_lament_sapling'),
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
        ('aof6:modern_industrialization/d_indigo_jacaranda_sapling'),
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
        ('aof6:modern_industrialization/d_jacaranda_sapling'),
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
        ('aof6:modern_industrialization/d_jacaranda_bush'),
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
        ('aof6:modern_industrialization/d_indigo_jacaranda_bush'),
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
        ('aof6:modern_industrialization/d_mahogany_sapling'),
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
        ('aof6:modern_industrialization/d_white_mangrove_sapling'),
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
        ('aof6:modern_industrialization/d_red_maple_sapling'),
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
        ('aof6:modern_industrialization/d_silver_maple_sapling'),
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
        ('aof6:modern_industrialization/d_maple_sapling'),
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
        ('aof6:modern_industrialization/d_mightshade_sapling'),
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
        ('aof6:modern_industrialization/d_palm_sapling'),
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
        ('aof6:modern_industrialization/d_palo_verde_sapling'),
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
        ('aof6:modern_industrialization/d_pine_sapling'),
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
        ('aof6:modern_industrialization/d_rainbow_eucalyptus_sapling'),
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
        ('aof6:modern_industrialization/d_redwood_sapling'),
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
        ('aof6:modern_industrialization/d_skyris_sapling'),
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
        ('aof6:modern_industrialization/d_willow_sapling'),
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
        ('aof6:modern_industrialization/d_witch_hazel_sapling'),
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
        ('aof6:modern_industrialization/d_zelkova_sapling'),
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
        ('aof6:modern_industrialization/d_sythian_fungus'),
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
        ('aof6:modern_industrialization/d_embur_wart'),
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
        ('aof6:modern_industrialization/d_withering_oak_sapling'),
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
        ('aof6:modern_industrialization/d_araucaria_sapling'),
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
        ('aof6:modern_industrialization/d_blue_spruce_sapling'),
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
        ('aof6:modern_industrialization/d_brown_birch_sapling'),
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
        ('aof6:modern_industrialization/d_brown_oak_sapling'),
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
        ('aof6:modern_industrialization/d_brown_zelkova_sapling'),
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
        ('aof6:modern_industrialization/d_joshua_sapling'),
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
        ('aof6:modern_industrialization/d_orange_birch_sapling'),
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
        ('aof6:modern_industrialization/d_orange_oak_sapling'),
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
        ('aof6:modern_industrialization/d_orange_spruce_sapling'),
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
        ('aof6:modern_industrialization/d_orchard_sapling'),
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
        ('aof6:modern_industrialization/d_red_birch_sapling'),
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
        ('aof6:modern_industrialization/d_red_oak_sapling'),
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
        ('aof6:modern_industrialization/d_red_spruce_sapling'),
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
        ('aof6:modern_industrialization/d_yellow_birch_sapling'),
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
        ('aof6:modern_industrialization/d_yellow_spruce_sapling'),
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
        ('aof6:modern_industrialization/d_soul_shroom'),
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
        ('aof6:modern_industrialization/d_shulkren_fungus'),
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
        ('aof6:modern_industrialization/d_death_cap'),
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
        ('aof6:modern_industrialization/d_orange_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_red_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_blue_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_yellow_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_pink_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_purple_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_white_azalea_sapling'),
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
        ('aof6:modern_industrialization/d_cinnamon_sapling'),
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
        ('aof6:modern_industrialization/d_cherry_sapling'),
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
        ('aof6:modern_industrialization/d_apple_tree_sapling'),
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
        ('aof6:modern_industrialization/d_walnut_sapling'),
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
        ('aof6:modern_industrialization/d_rubber_sapling'),
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
        ('aof6:modern_industrialization/d_orange_sapling'),
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
        ('aof6:modern_industrialization/d_magenta_sapling'),
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
        ('aof6:modern_industrialization/d_light_blue_sapling'),
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
        ('aof6:modern_industrialization/d_yellow_sapling'),
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
        ('aof6:modern_industrialization/d_lime_sapling'),
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
        ('aof6:modern_industrialization/d_pink_sapling'),
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
        ('aof6:modern_industrialization/d_cyan_sapling'),
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
        ('aof6:modern_industrialization/d_purple_sapling'),
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
        ('aof6:modern_industrialization/d_blue_sapling'),
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
        ('aof6:modern_industrialization/d_brown_sapling'),
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
        ('aof6:modern_industrialization/d_green_sapling'),
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
        ('aof6:modern_industrialization/d_red_sapling'),
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
        ('aof6:modern_industrialization/d_black_sapling'),
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
        ('aof6:modern_industrialization/d_white_sapling'),
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
        ('aof6:modern_industrialization/d_twilight_oak_sapling'),
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
        ('aof6:modern_industrialization/d_canopy_sapling'),
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
        ('aof6:modern_industrialization/d_mangrove_sapling'),
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
        ('aof6:modern_industrialization/d_darkwood_sapling'),
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
        ('aof6:modern_industrialization/d_hollow_oak_sapling'),
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
        ('aof6:modern_industrialization/d_time_sapling'),
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
        ('aof6:modern_industrialization/d_transformation_sapling'),
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
        ('aof6:modern_industrialization/d_mining_sapling'),
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
        ('aof6:modern_industrialization/d_sorting_sapling'),
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
        ('aof6:modern_industrialization/d_rainbow_oak_sapling'),
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
        ('aof6:modern_industrialization/e_oak_sapling'),
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
        ('aof6:modern_industrialization/e_spruce_sapling'),
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
        ('aof6:modern_industrialization/e_birch_sapling'),
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
        ('aof6:modern_industrialization/e_jungle_sapling'),
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
        ('aof6:modern_industrialization/e_acacia_sapling'),
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
        ('aof6:modern_industrialization/e_dark_oak_sapling'),
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
        ('aof6:modern_industrialization/e_mangrove_propagule'),
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
        ('aof6:modern_industrialization/e_twisted_sapling'),
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
        ('aof6:modern_industrialization/e_palm_sapling'),
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
        ('aof6:modern_industrialization/e_juniper_sapling'),
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
        ('aof6:modern_industrialization/e_cypress_sapling'),
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
        ('aof6:modern_industrialization/e_elder_sapling'),
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
        ('aof6:modern_industrialization/e_dragons_blood_sapling'),
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
        ('aof6:modern_industrialization/e_blighted_balsa_sapling'),
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
        ('aof6:modern_industrialization/e_willow_sapling'),
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
        ('aof6:modern_industrialization/e_swamp_cypress_sapling'),
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
        ('aof6:modern_industrialization/e_ancient_oak_sapling'),
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
        ('aof6:modern_industrialization/e_white_oak_sapling'),
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
        ('aof6:modern_industrialization/e_legacy_sapling'),
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
        ('aof6:modern_industrialization/e_yew_sapling'),
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
        ('aof6:modern_industrialization/e_aspen_sapling'),
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
        ('aof6:modern_industrialization/e_baobab_sapling'),
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
        ('aof6:modern_industrialization/e_blue_enchanted_sapling'),
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
        ('aof6:modern_industrialization/e_purple_bulbis_oddity'),
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
        ('aof6:modern_industrialization/e_bulbis_oddity'),
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
        ('aof6:modern_industrialization/e_pink_cherry_sapling'),
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
        ('aof6:modern_industrialization/e_white_cherry_sapling'),
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
        ('aof6:modern_industrialization/e_cika_sapling'),
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
        ('aof6:modern_industrialization/e_cypress_sapling'),
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
        ('aof6:modern_industrialization/e_ebony_sapling'),
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
        ('aof6:modern_industrialization/e_ether_sapling'),
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
        ('aof6:modern_industrialization/e_fir_sapling'),
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
        ('aof6:modern_industrialization/e_green_enchanted_sapling'),
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
        ('aof6:modern_industrialization/e_holly_sapling'),
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
        ('aof6:modern_industrialization/e_fungal_imparius'),
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
        ('aof6:modern_industrialization/e_imparius_mushroom'),
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
        ('aof6:modern_industrialization/e_lament_sapling'),
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
        ('aof6:modern_industrialization/e_indigo_jacaranda_sapling'),
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
        ('aof6:modern_industrialization/e_jacaranda_sapling'),
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
        ('aof6:modern_industrialization/e_mahogany_sapling'),
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
        ('aof6:modern_industrialization/e_white_mangrove_sapling'),
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
        ('aof6:modern_industrialization/e_ed_maple_sapling'),
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
        ('aof6:modern_industrialization/e_silver_maple_sapling'),
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
        ('aof6:modern_industrialization/e_maple_sapling'),
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
        ('aof6:modern_industrialization/e_mightshade_sapling'),
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
        ('aof6:modern_industrialization/e_palm_sapling'),
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
        ('aof6:modern_industrialization/e_palo_verde_sapling'),
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
        ('aof6:modern_industrialization/e_pine_sapling'),
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
        ('aof6:modern_industrialization/e_rainbow_eucalyptus_sapling'),
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
        ('aof6:modern_industrialization/e_redwood_sapling'),
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
        ('aof6:modern_industrialization/e_skyris_sapling'),
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
        ('aof6:modern_industrialization/e_willow_sapling'),
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
        ('aof6:modern_industrialization/e_witch_hazel_sapling'),
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
        ('aof6:modern_industrialization/e_zelkova_sapling'),
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
        ('aof6:modern_industrialization/e_sythian_fungus'),
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
        ('aof6:modern_industrialization/e_embur_wart'),
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
        ('aof6:modern_industrialization/e_withering_oak_sapling'),
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
        ('aof6:modern_industrialization/e_araucaria_sapling'),
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
        ('aof6:modern_industrialization/e_blue_spruce_sapling'),
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
        ('aof6:modern_industrialization/e_brown_birch_sapling'),
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
        ('aof6:modern_industrialization/e_brown_oak_sapling'),
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
        ('aof6:modern_industrialization/e_brown_zelkova_sapling'),
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
        ('aof6:modern_industrialization/e_joshua_sapling'),
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
        ('aof6:modern_industrialization/e_orange_birch_sapling'),
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
        ('aof6:modern_industrialization/e_orange_oak_sapling'),
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
        ('aof6:modern_industrialization/e_orange_spruce_sapling'),
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
        ('aof6:modern_industrialization/e_orchard_sapling'),
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
        ('aof6:modern_industrialization/e_red_birch_sapling'),
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
        ('aof6:modern_industrialization/e_red_oak_sapling'),
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
        ('aof6:modern_industrialization/e_red_spruce_sapling'),
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
        ('aof6:modern_industrialization/e_yellow_birch_sapling'),
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
        ('aof6:modern_industrialization/e_yellow_spruce_sapling'),
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
        ('aof6:modern_industrialization/e_soul_shroom'),
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
        ('aof6:modern_industrialization/e_shulkren_fungus'),
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
        ('aof6:modern_industrialization/e_death_cap'),
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
        ('aof6:modern_industrialization/e_orange_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_red_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_blue_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_yellow_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_pink_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_purple_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_white_azalea_sapling'),
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
        ('aof6:modern_industrialization/e_cherry_sapling'),
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
        ('aof6:modern_industrialization/e_apple_tree_sapling'),
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
        ('aof6:modern_industrialization/e_walnut_sapling'),
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
        ('aof6:modern_industrialization/e_rubber_sapling'),
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
        ('aof6:modern_industrialization/e_orange_sapling'),
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
        ('aof6:modern_industrialization/e_magenta_sapling'),
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
        ('aof6:modern_industrialization/e_light_blue_sapling'),
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
        ('aof6:modern_industrialization/e_yellow_sapling'),
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
        ('aof6:modern_industrialization/e_lime_sapling'),
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
        ('aof6:modern_industrialization/e_pink_sapling'),
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
        ('aof6:modern_industrialization/e_cyan_sapling'),
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
        ('aof6:modern_industrialization/e_purple_sapling'),
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
        ('aof6:modern_industrialization/e_blue_sapling'),
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
        ('aof6:modern_industrialization/e_brown_sapling'),
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
        ('aof6:modern_industrialization/e_green_sapling'),
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
        ('aof6:modern_industrialization/e_red_sapling'),
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
        ('aof6:modern_industrialization/e_black_sapling'),
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
        ('aof6:modern_industrialization/e_white_sapling'),
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
        ('aof6:modern_industrialization/e_twilight_oak_sapling'),
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
        ('aof6:modern_industrialization/e_canopy_sapling'),
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
        ('aof6:modern_industrialization/e_mangrove_sapling'),
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
        ('aof6:modern_industrialization/e_darkwood_sapling'),
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
        ('aof6:modern_industrialization/e_hollow_oak_sapling'),
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
        ('aof6:modern_industrialization/e_time_sapling'),
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
        ('aof6:modern_industrialization/e_transformation_sapling'),
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
        ('aof6:modern_industrialization/e_mining_sapling'),
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
        ('aof6:modern_industrialization/e_sorting_sapling'),
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
        ('aof6:modern_industrialization/e_rainbow_oak_sapling'),
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
