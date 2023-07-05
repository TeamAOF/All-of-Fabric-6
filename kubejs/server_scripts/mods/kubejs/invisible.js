ServerEvents.recipes(event => {
    event.stonecutting('kubejs:invisible_ingot', 'minecraft:glass')
    event.shaped(
        Item.of('kubejs:invisible_helmet', 1),
        [ 
          'III',
          'I I',
          '   '
        ],
        {
          I: 'kubejs:invisible_ingot'

        }
      )
      event.shaped(
        Item.of('kubejs:invisible_chestplate', 1),
        [ 
          'I I',
          'III',
          'III'
        ],
        {
          I: 'kubejs:invisible_ingot'

        }
      )
      event.shaped(
        Item.of('kubejs:invisible_leggings', 1),
        [ 
          'III',
          'I I',
          'I I'
        ],
        {
          I: 'kubejs:invisible_ingot'

        }
      )
      event.shaped(
        Item.of('kubejs:invisible_boots', 1),
        [ 
          '   ',
          'I I',
          'I I'
        ],
        {
          I: 'kubejs:invisible_ingot'

        }
      )
    })