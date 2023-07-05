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
        ('aof6:modern_industrialization/croptopia_crops'),
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
        ('aof6:modern_industrialization/croptopia_trees'),
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
        ('aof6:modern_industrialization/minecraft_crops'),
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
            { amount: 1, item: ('minecraft:melon'), probability: 0.02 }
    
            ],
            [
                { amount: 1000, fluid: ('minecraft:water')}
            ]
    );
});