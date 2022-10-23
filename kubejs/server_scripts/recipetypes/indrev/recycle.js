////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {
event.recipes.indrev.recycle({
  

  "ingredients": [
    {
      "tag": "c:crops",
      "count": 2
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 1
  },
  "processTime": 150


  });

event.recipes.indrev.recycle({
  

  "ingredients": [
    {
      "tag": "c:seeds",
      "count": 2
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 1
  },
  "processTime": 150


  });
});