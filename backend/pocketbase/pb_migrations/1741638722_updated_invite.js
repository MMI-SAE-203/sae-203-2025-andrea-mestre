/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select4283539469",
    "maxSelect": 5,
    "name": "metiers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Réalisatrice",
      "Scénariste",
      "Acteur",
      "Actrice"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select4283539469",
    "maxSelect": 11,
    "name": "metiers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Action",
      "aventure Science-fiction",
      "thriller Drame",
      "romance Comédie",
      "musical Fantastique",
      "horreur Policier",
      "mystère Western",
      "historique Animation",
      "famille Documentaire",
      "biopic Guerre",
      "espionnage"
    ]
  }))

  return app.save(collection)
})
