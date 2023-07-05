ServerEvents.recipes(event => {
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
    )
    })