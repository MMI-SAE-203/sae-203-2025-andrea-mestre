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
      "Actrice",
      "Journaliste",
      "Auteur",
      "Conférencier"
    ]
  }))

  return app.save(collection)
}, (app) => {
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
})
