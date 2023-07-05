ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:purple_dye', 1),
        [ 
          'croptopia:grape',
          'croptopia:mortar_and_pestle'
        ]
      )
      .keepIngredient('croptopia:mortar_and_pestle').id('croptopia:purple_dye')
})