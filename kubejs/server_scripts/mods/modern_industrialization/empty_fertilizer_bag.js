ServerEvents.recipes(event => {
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
    )
    })