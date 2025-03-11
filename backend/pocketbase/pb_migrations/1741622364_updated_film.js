/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1318551132",
    "maxSelect": 1,
    "name": "salle",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "1",
      "2"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1318551132",
    "maxSelect": 2,
    "name": "salle",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "1",
      "2"
    ]
  }))

  return app.save(collection)
})
