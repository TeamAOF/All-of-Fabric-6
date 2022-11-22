

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

// BYG Bookshelfs
  const byg_bookshelfs = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'crimson',
    'warped',
    ];

    byg_bookshelfs.forEach((item) => {
    event.remove({ output: 'minecraft:bookshelf' });
    event.shaped('minecraft:bookshelf', [
      'AAA', 
      'BBB', 
      'AAA'
    ], {
        A: 'minecraft:' + item + '_planks',
        B: 'minecraft:book'
      })
    });
    
  const recipes = [

{
  output: 'minecraft:flint',
  pattern: ['AA ', 'A  ', '   '],
  key: {
    A: 'minecraft:gravel',
},
  id: 'aof:flint'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
