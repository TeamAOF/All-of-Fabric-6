    ////////////////////////
    /// Made by Team AOF ///
    ////////////////////////

    ServerEvents.recipes(event => {

        const recipes = [
    
        //Invisisble Helmet
        {
            output: 'kubejs:invisible_helmet',
            pattern: ['III', 'I I', '   '],
            key: {
            I: 'kubejs:invisible_ingot'
            },
        },

        //Invisisble Chestplate
        {
            output: 'kubejs:invisible_chestplate',
            pattern: ['I I', 'III', 'III'],
            key: {
            I: 'kubejs:invisible_ingot'
            },
        },

        //Invisible Leggings
        {
            output: 'kubejs:invisible_leggings',
            pattern: ['III', 'I I', 'I I'],
            key: {
            I: 'kubejs:invisible_ingot'
            },
        },

        //Invisible Boots
        {
            output: 'kubejs:invisible_boots',
            pattern: ['   ', 'I I', 'I I'],
            key: {
            I: 'kubejs:invisible_ingot'
            },
        },
        ];
    
        recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key);
        });
    });