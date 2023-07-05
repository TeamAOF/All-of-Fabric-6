ServerEvents.recipes(event => {
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
    )
    })