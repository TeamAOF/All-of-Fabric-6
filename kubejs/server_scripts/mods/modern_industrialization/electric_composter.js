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
    )
})