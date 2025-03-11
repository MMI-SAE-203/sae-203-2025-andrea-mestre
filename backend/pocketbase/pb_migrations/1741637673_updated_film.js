/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 10,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Drame",
      "Action",
      "Aventure Science-fiction",
      "Thriller",
      "Romance",
      "Comédie",
      "Musical",
      "Fantastique",
      "Horreur",
      "Policier",
      "Mystère",
      "Western",
      "Historique",
      "Animation",
      "Famille",
      "Documentaire",
      "Biopic",
      "Guerre",
      "Espionnage",
      "Thriller"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 2,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Drame",
      "Action",
      "Aventure Science-fiction",
      "Thriller",
      "Romance",
      "Comédie",
      "Musical",
      "Fantastique",
      "Horreur",
      "Policier",
      "Mystère",
      "Western",
      "Historique",
      "Animation",
      "Famille",
      "Documentaire",
      "Biopic",
      "Guerre",
      "Espionnage",
      "Thriller"
    ]
  }))

  return app.save(collection)
})
