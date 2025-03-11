/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

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
      "Coréen",
      "Turque"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

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
})
