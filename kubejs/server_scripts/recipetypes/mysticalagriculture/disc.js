
    ////////////////////////
    /// Made by Team AOF ///
    ////////////////////////

    ServerEvents.recipes(event => {

        const recipes = [

            // Cat Disc
            {
                output: 'minecraft:music_disc_cat',
                pattern: ['BC ', 'S  '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_cat'
            },

            // 13 Disc
            {
                output: 'minecraft:music_disc_13',
                pattern: ['BCS', '   ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_13'
            },
            
            //Blocks Disc
            {
                output: 'minecraft:music_disc_blocks',
                pattern: ['BS ', 'C  ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_blocks'
            },

            //Chirp Disc
            {
                output: 'minecraft:music_disc_chirp',
                pattern: ['BSC', '   ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_chirp'
            },

            //Far Disc
            {
                output: 'minecraft:music_disc_far',
                pattern: ['B  ', 'SC ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_far'
            },

            //Mall Disc
            {
                output: 'minecraft:music_disc_mall',
                pattern: ['B  ', 'CS ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_mall'
            },

            //Mellohi Disc
            {
                output: 'minecraft:music_disc_mellohi',
                pattern: [' C ', 'SB ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_mellohi'
            },

            //Stal Disc
            {
                output: 'minecraft:music_disc_stal',
                pattern: [' S ', 'CB ', '   '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_stal'
            },

            //Strad Disc
            {
                output: 'minecraft:music_disc_strad',
                pattern: ['C  ', 'S  ', 'B  '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_strad'
            },

            //Ward Disc
            {
                output: 'minecraft:music_disc_ward',
                pattern: [' S ', ' B ', ' C '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_ward'
            },

            //11 Disc
            {
                output: 'minecraft:music_disc_11',
                pattern: [' S ', ' B ', ' C '],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_11'
            },

            //Wait Disc
            {
                output: 'minecraft:music_disc_wait',
                pattern: ['   ', '  S', ' CB'],
                key: {
                    S: 'mysticalagriculture:skeleton_essence',
                    B: 'mysticalagriculture:blank_record',
                    C: 'mysticalagriculture:creeper_essence'
                },
                id: 'mysticalagriculture:essence/minecraft/music_disc_wait'
            },


        ];


        recipes.forEach((recipe) => {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
          });
    });