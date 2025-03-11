/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select3486401665",
    "maxSelect": 1,
    "name": "Sous_titre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "oui",
      "non"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2471982478",
    "maxSelect": 1,
    "name": "langue",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Français",
      "Anglais",
      "Coréen"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("select3486401665")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2471982478",
    "maxSelect": 1,
    "name": "langue",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Français",
      "Anglais"
    ]
  }))

  return app.save(collection)
})
