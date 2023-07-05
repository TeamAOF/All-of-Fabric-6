ServerEvents.recipes(event => {
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
    )
    })