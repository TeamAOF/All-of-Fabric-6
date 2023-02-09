////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  // Salt Dust
  event.shaped("1x bewitchment:salt", [["modern_industrialization:salt_dust"]]);
    
  const recipes = [
{
  output: 'bewitchment:dragons_blood_broom',
  pattern: [' C ', 'EBF', 'DAD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:dragons_blood_sapling',
    E: 'reaper:rune_velocitas',
    F: 'twilightforest:raven_feather',
},
  id: 'bewitchment:dragons_blood_broom'
},

{
  output: 'bewitchment:juniper_broom',
  pattern: [' C ', 'EBF', 'DAD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:juniper_sapling',
    E: 'reaper:rune_velocitas',
    F: 'twilightforest:raven_feather',
},
  id: 'bewitchment:juniper_broom'
},

{
  output: 'bewitchment:cypress_broom',
  pattern: [' C ', 'EBF', 'DAD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:cypress_sapling',
    E: 'reaper:rune_velocitas',
    F: 'twilightforest:raven_feather',
},
  id: 'bewitchment:cypress_broom'
},

{
  output: 'bewitchment:elder_broom',
  pattern: [' C ', 'EBF', 'DAD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:elder_sapling',
    E: 'reaper:rune_velocitas',
    F: 'twilightforest:raven_feather',
},
  id: 'bewitchment:elder_broom'
},

{
  output: 'bwplus:yew_broom',
  pattern: [' C ', 'EBF', 'DAD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bwplus:yew_sapling',
    E: 'reaper:rune_velocitas',
    F: 'twilightforest:raven_feather',
},
  id: 'bwplus:yew_broom'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
