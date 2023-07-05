ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;

    let electricComposter = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('electric_composter'),
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


    // -- making croptopia fertilizer
    electricComposter(
        ('aof6:modern_industrialization/croptopia_fertilizer'),
        8,
        200,
        [
            { amount: 1, item: ('kubejs:empty_fertilizer_bag') },
            { amount: 3, item: ('modern_industrialization:wood_pulp')},
            { amount: 6, item: ('create:tree_fertilizer')}
        ],
        [
            { amount: 1, item: ('kubejs:croptopia_fertilizer')}
        ],
        [
            { amount: 500, fluid: ('minecraft:water')}
        ]
    );

    // -- making croptopia mulch
    electricComposter(
        ('aof6:modern_industrialization/croptopia_mulch'),
        8,
        200,
        [
            { amount: 1, item: ('kubejs:empty_fertilizer_bag') },
            { amount: 6, item: ('modern_industrialization:wood_pulp')},
            { amount: 3, item: ('create:tree_fertilizer')}
        ],
        [
            { amount: 1, item: ('kubejs:croptopia_mulch')}
        ],
        [
            { amount: 500, fluid: ('minecraft:water')}
        ]
    );
});