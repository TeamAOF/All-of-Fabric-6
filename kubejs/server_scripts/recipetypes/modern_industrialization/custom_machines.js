ServerEvents.recipes(event => {
    event.shaped(
      Item.of('modern_industrialization:electric_composter', 1),
      [ 
        'SAS',
        'TMT',
        'LEL'
      ],
      {
        S: 'modern_industrialization:large_motor',
        A: 'modern_industrialization:aluminum_rotor',
        T: 'create:basin',
        M: 'modern_industrialization:basic_machine_hull',
        E: 'modern_industrialization:electronic_circuit',
        L: 'modern_industrialization:large_pump'
      }
    ),
    event.shaped(
      Item.of('modern_industrialization:electric_seed_reprocessor', 1),
      [ 
        'MPM',
        'NBN',
        'CAC'
      ],
      {
        M: 'modern_industrialization:motor',
        P: 'architects_palette:pipe',
        N: 'modern_industrialization:piston',
        B: 'modern_industrialization:basic_machine_hull',
        C: 'modern_industrialization:tin_cable',
        A: 'modern_industrialization:analog_circuit'
      }
    ),
    event.shaped(
      Item.of('modern_industrialization:growth_chamber', 1),
      [ 
        'SCS',
        'TMB',
        'LEL'
      ],
      {
        S: 'ad_astra:steel_plating',
        C: 'supplementaries:clock_block',
        T: 'modern_industrialization:aluminum_tank',
        M: 'modern_industrialization:basic_machine_hull',
        B: 'modern_industrialization:aluminum_barrel',
        E: 'modern_industrialization:electronic_circuit',
        L: 'modern_industrialization:large_pump'
      }
    ),
    event.shaped(
      Item.of('modern_industrialization:mystical_incubator', 1),
      [ 
        'SCS',
        'TMB',
        'LEL'
      ],
      {
        S: 'mysticalagriculture:machine_frame',
        C: 'supplementaries:clock_block',
        T: 'modern_industrialization:aluminum_tank',
        M: 'modern_industrialization:basic_machine_hull',
        B: 'modern_industrialization:aluminum_barrel',
        E: 'modern_industrialization:electronic_circuit',
        L: 'modern_industrialization:large_pump'
      }
    ),
    event.shaped(
      Item.of('kubejs:glue', 4),
      [ 
        ' B ',
        'BSB',
        ' B '
      ],
      {
        S: 'minecraft:slime_ball',
        B: 'minecraft:bone_meal'
      }
    ),
    event.shaped(
      Item.of('kubejs:empty_fertilizer_bag', 1),
      [ 
        'PGP',
        'P P',
        'PPP'
      ],
      {
        P: 'minecraft:paper',
        G: 'kubejs:glue'
      }
    ),
    event.shaped(
      Item.of('modern_industrialization:basic_growth_chamber', 1),
      [ 
        'BAB',
        'ZCW',
        'BBB'
      ],
      {
        C: 'minecraft:composter',
        B: 'minecraft:bricks',
        W: 'modern_industrialization:bronze_water_pump',
        Z: 'modern_industrialization:bronze_barrel',
        A: 'supplementaries:clock_block'
      })
})