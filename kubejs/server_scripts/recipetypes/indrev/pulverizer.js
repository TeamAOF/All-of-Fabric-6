////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {


// Quartz
 event.recipes.indrev.pulverize({
        
  type: "indrev:pulverize",
  ingredients: {
      tag: 'c:certus_quartz',
      count: 1
  },
  output: {
      item: 'ae2:certus_quartz_dust',
      count: 1
  },
  processTime: 300

 });

 event.recipes.indrev.pulverize({
        
  type: "indrev:pulverize",
  ingredients: {
      tag: 'c:certus_quartz_ores',
      count: 1
  },
  output: {
      item: 'ae2:certus_quartz_dust',
      count: 4
  },
  processTime: 300

 });

 // Coke
 event.recipes.indrev.pulverize({
        
    type: "indrev:pulverize",
    ingredients: {
        
        item: 'modern_industrialization:coke',
        count: 1
    },
    output: {
        item: 'modern_industrialization:coke_dust',
        count: 1
    },
    processTime: 300

     });

     // Zinc
     event.recipes.indrev.pulverize({
        
        type: "indrev:pulverize",
        ingredients: {
            
            item: 'create:raw_zinc',
            count: 1
        },
        output: {
            item: 'createplus:zinc_dust',
            count: 1
        },
        processTime: 300
    
         });

const mi_raw = [
    "tungsten",
    "antimony",
    "nickel",
    "iridium"
];

mi_raw.forEach((item) => { 
event.recipes.indrev.pulverize({
        
    type: "indrev:pulverize",
    ingredients: {
        
        item: 'modern_industrialization:raw_' + item,
        count: 2
    },
    output: {
        item: 'modern_industrialization:' + item + '_dust',
        count: 3
    },
    processTime: 300

     });
   });
});